import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Inbox } from '../../components/inbox/Inbox'
import SendIcon from '@mui/icons-material/Send';
import { Masg } from '../../components/Masg/Masg'
import "./Chat.css"

import { io } from "socket.io-client"

const Chat = () => {

    const [conversation, setconversation] = useState([]);

    const [currentChat, setCurrentChat] = useState(null);
    const [message, setMessage] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [text, setText] = useState("");
    const socket = useRef();
    const scrollref = useRef();

    const user = useSelector(state => state.user?.currentUser._id);

    // console.log(user);

    useEffect(() => {
        socket.current = io("ws://letsgroww.herokuapp.com");
        socket.current.on("getMessage",(data)=>{

            setArrivalMessage({
                sender:data.senderId,
                text: data.text,
                createdAt:Date.now(),
            });
        });

    }, []);

    // console.log(currentChat.members);

    useEffect(()=>{
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessage((perv)=>[...message, arrivalMessage]);
    },[arrivalMessage,currentChat]);


    // console.log(user);

    useEffect(() => {
        socket.current.emit("adduser",user);
        socket.current.on("getUsers",users=>{
            // console.log(users);
        })
    }, [user]);

    

    useEffect(() => {
        const getconversation = async () => {
            try {
                const res = await axios.get("/api/conversation/" + user);
                setconversation(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getconversation();
    }, [user]);






    useEffect(() => {
        const getmassages = async () => {
            try {
                const res = await axios.get("/api/message/" + currentChat?._id);
                setMessage(res.data);
                // console.log(res);
            } catch (err) {
                console.log(err);
            }

        };
        getmassages();
    }, [currentChat])

    // console.log(conversation._id);
    // // console.log(message);

    const handleClick = async (e) => {

        // e.preventDefault();


        const receiverId = currentChat.members.find(member=>member!==user);
        // console.log(receiverId);
        socket.current.emit("sendMessage",{
            senderId:user,
            receiverId,
            text:text,
        });

        try {

            const res = await axios.post("/api/message/", { conversationId: currentChat?._id, text, sender: user });
            setMessage([...message, res.data]);
            setText("");


        } catch (err) {
            console.log(err);
        };


    };

    useEffect(() => {
        scrollref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        <div class="container">
            <h3 class=" text-center">CHAT</h3>
            <div class="messaging">
                <div class="inbox_msg">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>Recent</h4>
                            </div>
                            <div class="srch_bar">
                                <div class="stylish-input-group">
                                    <input type="text" class="search-bar" placeholder="Search" />
                                    <span class="input-group-addon">
                                        <button type="button"> <i class="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </span> </div>
                            </div>
                        </div>
                        <div class="inbox_chat">

                            {conversation.map((c) => (
                                <div onClick={() => setCurrentChat(c)} >
                                    <Inbox conversation={c} active={c?._id === currentChat?._id} />
                                </div>

                            ))}

                        </div>
                    </div>
                    {currentChat ? <>

                        <div class="mesgs">
                            <div class="msg_history">
                                {
                                    message.map(m => (
                                        <div ref={scrollref}>
                                            <Masg message={m} own={m.sender === user} />
                                        </div>
                                    ))
                                }

                            </div>


                            <div class="type_msg">
                                <div class="input_msg_write">
                                    <input type="text" class="write_msg" placeholder="Type a message" value={text} onChange={(e) => setText(e.target.value)} />
                                    <button class="msg_send_btn" type="button" onClick={handleClick}><SendIcon></SendIcon></button>
                                </div>
                            </div>
                        </div>
                    </> : <span>Open a conversation to start chat...</span>}
                </div>



            </div></div>
    )
}

export default Chat