import React, {useEffect, useState} from 'react';
import WeathersContainer from "./components/MainContainer/WeathersContainer";
import Modal from "./components/Modal";
import Main from "./components/MainContainer/Main";

function App() {
    const [trigger, setTrigger] =  useState<boolean>(false)


    return (
        <>
            { trigger ? (
                <Modal />
            ) : (
                <Main />
            )}
        </>

    );
}

export {App};
