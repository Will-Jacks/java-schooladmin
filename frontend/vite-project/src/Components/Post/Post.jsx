import React, { useState } from 'react'

const Post = () => {
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState('');
    const [typeOfUser, setTypeOfUser] = useState('aluno');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(username, birthday, typeOfUser);
    }


    return (
        <div>
            <h1>Cadastre-se</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Nome </label>
                    <input type="text" placeholder='Digite seu nome' onChange={e => setUsername(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Data de nascimento </label>
                    <input type="date" name="" id="" onChange={e => setBirthday(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Seleciona um vínculo com a instituição </label>
                    <select name="" id="" onChange={e => setTypeOfUser(e.target.value)}>
                        <option value="aluno">Aluno</option>
                        <option value="professor">Professor</option>
                    </select>
                </div>

                <input type="submit" />
            </form>
        </div>
    )
}

export default Post