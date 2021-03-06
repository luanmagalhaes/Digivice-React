import styled from 'styled-components';
import digigif from '../../assets/pics/digigif.gif'

export const Container = styled.div`
height: 100vh;
background-image: url(${digigif});
background-size: auto 100%;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media only screen and (max-width: 600px) {
  background-size: 100% auto;
  background-repeat: no-repeat;
}

input {
background-color: white;
border: none;
border-bottom: 2px solid #ccc;
height: 20px;
width: var(--size);
}

input:hover {
background-color: #ccc;
}

h1 {
color: #102e98;
background-color: white;
font-family: 'Sigmar One', cursive;
margin-bottom: 10px;
text-align: center;
}

.relative {
margin-top: 20px;
position: relative;
background-color: rgba(255,255,255, .5);
height: 300px;
width: var(--size);
}

.digi {
width: 22%;
height: 22%;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
object-fit: contain;
}

.digi2 {
width: 22%;
height: 22%;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
object-fit: contain;
animation: blink 2s infinite alternate;
}

@keyframes blink {
    from{
        box-shadow: 0px 0px 10px white;
        width: 22%;
        height: 22%;
        }
        to{
            box-shadow: 0px 0px 300px blue;
            width: 40%;
            height: 40%;
        }
}

.digimg {
    width: 100%;
    position: absolute;
    object-fit: contain;
}

button {
width: var(--size);
border: none;
height: 3em;
font-weight: bold;
border-radius: 4px;
cursor: pointer;
transition: 200ms;
box-shadow: 1px 1px 5px #76caf9;
font-family: 'Sigmar One', cursive;
font-size: 15px;
}

button:hover {
background: #76caf9;
box-shadow: 3px 3px 5px;
transform: scale(1.2);
}

button:active{
background:#ccc;
transform: scale(1.1);
}
`;
