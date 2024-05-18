import React from "react";
import axios from "axios";

const api_key = 'api_key_value';
const effected_url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=all';

export const cservice = async (location:string) =>{
    const response = await axios.get(effected_url,{
        params:{
            location:String,
            cases:Number,
            deaths:Number,
            recovered:Number
        }
    });
    return response.data;
}
