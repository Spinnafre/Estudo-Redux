import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
    :root {
        --header: "header";
        --aside: "aside";
        --text-color: #6C6C80;
    
    }
    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;
        
    }
    #root{
        max-width:1280px;
        margin:0 auto;
        padding: 0px 20px 50px;
        display:flex;
        
        

    }
    body{
        background:#262626;
        -webkit-font-smoothing:antialiased;

        
    }
    body,input,button{
        font: 14px sans-serif;
    }
    button{
        cursor:pointer;
    }

`