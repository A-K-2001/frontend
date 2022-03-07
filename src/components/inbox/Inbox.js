import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Inboxitem } from '../Masg/inbox item/Inboxitem'

export const Inbox = (conversation,active) => {

    // console.log(conversation.active);

    // console.log(conversation.conversation.members);


    const cuser = useSelector(state=>state.user._id);
    const type  = useSelector(state=>state.user.type);

    // const auser = conversation.conversation.members.find((m)=>m!==cuser);
    // console.log(auser);

    const [user, setUser] = useState({});

    useEffect(()=>{
        const auser = conversation.conversation.members.find((m)=>m!==cuser);
            const getuser = async()=>{
                try{
                        if(type=="in"){
                                const res = await axios.get("/api/company/"+auser);
                                // console.log(res.data.username);
                                setUser(res.data);
                        }else{
                            const res = await axios.get("/api/investor/"+auser);
                            // console.log(res);
                            setUser(res.data);

                        }
                }catch(err){
                    console.log(err);
                }
            };
            getuser();

    },[cuser,conversation]);

    return (
        <div>
            <div class={conversation.active?"chat_list active_chat" :"chat_list"}>
                <div class="chat_people">
                    <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                    <div class="chat_ib">
                        <h5>{user?.username} <span class="chat_date">Dec 5</span></h5>
                        <p>Test, which is a new approach to have all solutions
                            astrology under one roof.</p>
                    </div>
                </div>
            </div>
            

        </div>

    )
}
