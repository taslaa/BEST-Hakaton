import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import HomesService from '../../../../data/services/HomesService';
import UsersService from '../../../../data/services/UsersService';
import toastify from '../../../../utils/toastify/toastify';
import RoomsService from '../../../../data/services/RoomsService';


export default function UserDetailPage() {
    const [homes, setHomes] = useState();
    const [count, setCount] = useState();

    const [rooms, setRooms] = useState();

    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams();

    useEffect(() => {
        const fetchHomes = async () => {
            const homesList = await HomesService.getByUserId(id);
            setHomes(homesList);
            setCount(homesList.length);
            //const homesArr = [];

            // homes.keys.forEach(home => {
            //     home.keys.forEach(h => {
            //         array.push(h);
            //     })
            // });

            // console.log(homesList[0].Key);

            // homesList[0].Key.forEach(element => {
            //     homesArr.push(element);
            // });

            //setHomes(homesArr);

        }


        fetchHomes();
    }, [])
    return (
        <>
            <div class="row">
                {homes &&
                    homes.map((home, index) => (
                        <div key={index} class="col-md-4">
                            <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100 d-flex flex-column justify-content-center align-items-center" style={{ height: "400px" }}>
                                <div class="text-center mb-2">
                                    <span class="h6 fw-light mb-0 font-size-sm">{home.Name}</span><br />
                                    <span class="h6 fw-light mb-0 font-size-sm">{home.Address}</span><br />
                                    <span class="h6 fw-light mb-0 font-size-sm">{home.Type}</span>
                                </div>
                                <div class="icon-lg rounded-circle bg-warning text-white mb-0"><i class="fa-solid fa-hotel fa-fw"></i></div>
                            </div>
                        </div>
                    ))}



                <div class="col-md-4">
                    <div class="card card-body bg-warning bg-opacity-10 border border-warning border-opacity-25 p-4 h-100 d-flex justify-content-center align-items-center">
                        <h1
                            style={{
                                fontFamily: 'Arial, sans-serif',
                                fontWeight: 600,
                                fontSize: '100px',
                                color: '#FFC107',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                margin: '0',
                                padding: '10px'
                            }}>
                            <div style={{ textAlign: 'center' }}>
                                <span className="h6 fw-light mb-0">Total devices</span>
                                <br />
                                <span>{count}</span>
                            </div>

                        </h1>
                    </div>
                </div>
            </div>



        </>
    )
}
