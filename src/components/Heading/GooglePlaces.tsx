'use client'
import React, { useEffect, useState } from 'react'
import usePlacesAutocomplete from "use-places-autocomplete";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { observer } from "mobx-react-lite"
import store from '@/store/formStore'
import { IAddressObj } from '@/store/initialState';

type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
const libreries: Libraries = ["places"];

const GooglePlaces = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS as string,
        libraries: libreries
    })

    return (<>
        {
            isLoaded ?
                <Places />
                : null
        }
    </>)
}

export default observer(GooglePlaces)

const Places = observer(() => {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete({ debounce: 300 })
    const [showList, setShowList] = useState(true);
    const { heading } = store.state
    const inputHandler = (e: string) => {
        if (value.length > 1) {
            setShowList(true)
        }
        setValue(e);
        heading.addressString = e
    }

    const listItemsClickHandler = async (el: google.maps.places.AutocompletePrediction) => {
        setShowList(false)
        geocodeByPlaceId(el.place_id)
            .then(results => {

                const addressObj = shortenAddress(results)
                heading.addressString = results[0].formatted_address;
                heading.addressObj = addressObj;
            }
            )
            .catch(error => console.error(error));
    }

    const deleteHandler = () => {
        heading.addressString = '';
        heading.addressObj = { city: "", state: "", zip_code: "" }
    }

    return (
        <div className='md:w-1/2 px-3'>
            <div className='relative' >
                <div className="w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='address-input'>
                        Adress
                    </label>
                    <input list='address' name='address'
                        disabled={!ready} value={heading.addressString} onFocus={() => setShowList(true)} onChange={(e) => inputHandler(e.currentTarget.value)}
                        className={` appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                        id={"address-input"} type={"text"} placeholder={"City, State, Zip"} />
                    {heading.addressString.length > 1 && <button onClick={deleteHandler} className='absolute right-0 p-3 bottom-[35%] translate-y-1/2 text-black'> X </button>}
                </div>
                {!showList ? null :
                    status === "OK" &&
                    <>
                        <div className="absolute z-10 left-0 right-0 overflow-hidden top-full bg-gray-200 block appearance-none  rounded leading-tight " id="grid-state">
                            {
                                data.map(el =>
                                    <button onClick={() => listItemsClickHandler(el)} key={el.place_id} className=' cursor-pointer w-full  text-gray-700 rounded  py-3 px-4 pr-8 hover:bg-gray-400 '>
                                        {el.description}
                                    </button>
                                )
                            }

                        </div>
                    </>
                }
            </div>
        </div>
    )
})


function shortenAddress(data: google.maps.GeocoderResult[]): IAddressObj {
    let adressObj: IAddressObj = {
        city: "",
        state: "",
        zip_code: ""
    };
    data[0].address_components.forEach(address => {
        if (address.types[0] === "locality") {
            adressObj.city = address.short_name
        } else if (address.types[0] === "administrative_area_level_1") {
            adressObj.state = address.short_name
        } else if (address.types[0] === 'postal_code') {
            adressObj.zip_code = address.short_name

        }
    })
    return adressObj;
}