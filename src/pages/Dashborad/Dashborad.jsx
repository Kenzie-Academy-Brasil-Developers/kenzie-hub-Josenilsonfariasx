import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Dashboard = ({ user, setUser }) => {

    return (
        <div className={style.div}>
            <Header visible={true} user={user} setUser={setUser}/>
            <main className={style.main}>
                <div className={style.user}>
                    <div className="container">
                        <h2 className="title white">Olá {user.name}</h2>
                        <span className="title grey headline">
                            {user.course_module}
                        </span>
                    </div>
                </div>
                <div className={style.info}>
                    <h2 className="title white">
                        Que pena! Estamos em desenvolvimento :(
                    </h2>
                    <h2 className="title white">
                        Nossa aplicação está em desenvolvimento, em breve
                        teremos novidades
                    </h2>
                </div>
            </main>
        </div>
    );
};