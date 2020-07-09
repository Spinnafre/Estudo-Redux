import styled from 'styled-components'
import {darken} from 'polished'

export const Container=styled.aside`
    width:100%;
    /* background:#262626; */
    max-width:230px;
    

    color:#fff;
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:baseline;
    /* margin-top:20px; */
    h1{
        /* text-align:left; */
        font-size:20px;
        margin-bottom:20px;
        margin-top:20px;
    }
    
    ul{
        list-style:none;
        li{
            margin-bottom:8px;
            button{
                background:#7B68EE;
                border:none;
                padding:8px;
                border-radius:8px;
                color:#fff;
                /* transition: background 0.4s cubic-bezier(.25,.8,.25,1); */
                transition:all 0.3s cubic-bezier(.25,.8,.25,1);

                &:hover{
                    background:${darken(0.1,"#6b5b95")};
                }
            }
        }
    }
`