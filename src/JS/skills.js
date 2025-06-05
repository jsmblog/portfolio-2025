import node from '/node.webp'
import express from '/express.webp'
import mysql from '/mysql.webp'

import ionic from '/ionic.webp'
import html from '/html.webp'
import css from '/css.webp'
import javascript from '/js.webp'
import react from '/react.webp'
import vite from '/vite.webp'

import google from '/google.webp'
import firebase from '/firebase.webp'
import git from '/git.webp'
import github from '/github.webp'
import figma from '/figma.webp'
import canva from '/canva.webp'
export const MY_STACK = {
    'Backend':[
            {
                name:'Node js',
                icon:node,
                size:20
            },
            {
                name:'Express',
                icon:express,
                size:23
            },
            {
                name:'MySQL',
                icon:mysql,
                size:35
            }
        ],
    'Frontend':[
            {
                name:'Ionic',
                icon:ionic,
                size:15
            },
            {
                name:'HTML',
                icon:html,
                size:15
            },
            {
                name:'CSS',
                icon:css,
                size:15
            },
            {
                name:'JavaScript',
                icon:javascript,
                size:15
            },
            {
                name:'React',
                icon:react,
                size:18
            },
            {
                name:'Vite',
                icon:vite,
                size:15
            }
        ],
    'Servicios en la nube':[
       {
                name:'Google Cloud',
                icon:google,
                size:15
       },
       {
                name:'Firebase',
                icon:firebase,
                size:15
       }
    ],
    'Control de versiones':[
       {
                name:'Git',
                icon:git,
                size:18
       },
       {
                name:'Github',
                icon:github,
                size:17
       }
    ],
    'Diseño UI/UX':[
       {
                name:'Figma',
                icon:figma,
                size:17
       },
       {
                name:'canva',
                icon:canva,
                size:20
       }
    ]
}