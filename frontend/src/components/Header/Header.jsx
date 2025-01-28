import './Header.css'

export default function Header() {
  return (
    <header id="header">
      <img className='logoImg' src='../../img/Pets&Me-Transparant.png' alt=''></img>
      <div className='info'>
        <p>Email: Petsandme2022*abc*@gmail.com</p>
        <p>Please remove "*abc*" when sending an email.</p>
      </div>
    </header>
  );
}