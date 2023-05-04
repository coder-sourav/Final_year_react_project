

export interface IHotel{
   name:string;
   photos_url:string;
   cuisines:string;
   url:string;
}
export interface iStaturizedHotel{
    loading:string;
    hotels:IHotel[];

}
export interface IHotelAction{
    type :string;
    payload: IHotel[];
}

export const HotelReducer= (state:iStaturizedHotel, action:IHotelAction):iStaturizedHotel=>{
    switch(action.type){
        case "notStarted": return {...state,loading:"not started"};
        case "failedHotel" :return {...state,loading:"faiiled"}
        case "completed" :return{...state,hotels:action.payload,loading:"completed"}
        

    }
    return {loading:"not started",hotels:[]}

}