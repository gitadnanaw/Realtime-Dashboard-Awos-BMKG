<template>
    <div>
        <div class="modal-box" v-if="modalOpen" @click="closeModalOutside">
            <img class="modal-img" :src="require(`../../assets/${currentImage}`)" alt="">
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg">
                <div class="main-box mx-auto flex justify-content-center flex-wrap">

                    <!-- CARD RUNWAY 1111111111111111111111111 -->
                    <div class="box-1">
                        <div class="card m-2 mt-3 border-0 rounded-0"
                            style="width: 21rem; height: 3rem; background-color: #00000030;">
                            <div class="card-body">
                                <h5 class="card-title text-white">{{ title1 }}</h5>
                            </div>
                        </div>
                        <div class="card m-2 border-0 rounded-0"
                            style="width: 21rem; height: 11rem; background-color: #00000030;">
                            <div class="card-body">
                                <img class="mt-1 ml-8 hover:scale-110 transition duration-500 cursor-pointer"
                                    @click="openModal('runway1.png')" style="width: 80%;" src="../../assets/runway1.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="card m-2 border-0 rounded-0 text-white"
                            style="width: 21rem; height: 18rem; background-color: #00000030;">
                            <div class="card-body">
                                <h5 class="card-title">{{ windTitle1 }}</h5>
                                <div class="svg-1" style="font-size: 17px; ">
                                    <div class="svg-2" style="font-size: 16px; position: absolute;">
                                        <svg width="19rem" height="15rem" style="background-color: none;">
                                            <text class="wind-dir" x="39" y="125">W</text>
                                            <text class="wind-dir" x="254" y="125">E</text>
                                            <text class="wind-dir" x="149" y="19">N</text>
                                            <text class="wind-dir" x="149" y="233">S</text>
                                        </svg>
                                    </div>
                                    <div class="svg-3"
                                        style="font-size: 9px; position: absolute; margin-top: 188.8px; margin-left: -16px;">
                                        <svg width="5.5rem" height="3.5rem" style="background-color: rgba(0, 0, 0, 0.6);">
                                            <text class="wind-dir" x="10" y="15">
                                                <tspan>Max</tspan>
                                                <tspan dx="16.8">= {{ windMax1 }}</tspan>
                                            </text>
                                            <text class="wind-dir" x="10" y="32">
                                                <tspan>X Wind</tspan>
                                                <tspan dx="5">= {{ windX1 }}</tspan>
                                            </text>
                                            <text class="wind-dir" x="10" y="48">
                                                <tspan>Gusty</tspan>
                                                <tspan dx="10.7">= {{ windGusty1 }}</tspan>
                                            </text>
                                        </svg>
                                    </div>
                                    <div class="svg-4"
                                        style="font-size: 9px; position: absolute; margin-top: -43.2px; margin-left: 232px;">
                                        <svg width="5.5rem" height="1.7rem" style="background-color: none;">
                                            <text class="wind-dir" x="35" y="10">{{ windDate1 }}</text>
                                            <text class="wind-dir" x="24" y="22">{{ windTime1 }} UTC</text>
                                        </svg>
                                    </div>
                                    <svg width="19rem" height="15rem" style="background-color: none; scale: 0.85;">
                                        <g id="runway-svg" transform="translate(155,120) rotate(0,0,0)">
                                            <path fill="#a7a8aa" d="M-85,0a85,85 0 01 170,0a85,85 0 01-170,0Z">
                                            </path>
                                            <line x1="-85" y1="0" x2="85" y2="0" stroke="black" stroke-dasharray="10"
                                                stroke-width="2" />
                                            <g transform="translate(0,0) rotate(90,0,0)">
                                                <image xlink:href="../../assets/icon-pesawat.png" x="-15" y="-15" width="30"
                                                    height="30" />
                                            </g>
                                            <path fill="white" d="M79.5 -30 A84.8 -84.5 0 0 0 -79.4 -30" />
                                            <path fill="white" d="M-79.5 30 A-84.8 84.5 0 0 0 79.4 30" />
                                        </g>

                                        <!-- text-dalam -->
                                        <text class="wind-spd" x="120" y="70">Speed(Kt)</text>
                                        <text class="wind-data" id="ws2" x="145" y="95">{{ windSpeed1 }}</text>
                                        <text class="wind-spd" x="133" y="190">Dir (°)</text>
                                        <text class="wind-data" id="ws2" x="145" y="165">{{ windDir1 }}</text>
                                        <!-- text-dalam -->
'
                                        <g id="jarum-svg1" :transform="'translate(155,120) rotate(' + windDir1 + ',0,0)'">
                                            <path fill="rgba(0,0,0,0.2)" d="M-85,0a85,85 0 01 170,0a85,85 0 01-170,0Z">
                                            </path>
                                            <path fill="red"
                                                d="M5.204748896376251e-15,-85A85,85 0 0,1 5.9830228183746073,-84.94764019597635L0,0Z">
                                            </path>
                                        </g>
                                        <g id="1mnt-svg1" :transform="'translate(155,120) rotate(' + windDir1 + ',0,0)'">
                                            <path fill="red"
                                                d="M6.123233995736766e-15,-100A100,100 0 0,1 25.54457579357899,-96.68233886044597L24.26734700390004,-91.84822191742366A95,95 0 0,0 5.8170722959499274e-15,-95Z">
                                            </path>
                                            <path fill="#cccccc"
                                                d="M25.54457579357899,-96.68233886044597A100,100 0 1,1 -1.8369701987210297e-14,-100L-1.745121688784978e-14,-95A95,95 0 1,0 24.26734700390004,-91.84822191742366Z">
                                            </path>
                                        </g>
                                        <g id="10mnt-svg1"  :transform="'translate(155,120) rotate(' + windDir1 + ',0,0)'">
                                            <path fill="#868688"
                                                d="M7.041719095097281e-15,-115A115,115 0 0,1 70.1666938486458,-91.1133089858469L67.11596802913947,-87.15186076907095A110,110 0 0,0 6.735557395310443e-15,-110Z">
                                            </path>
                                            <path fill="#cccccc"
                                                d="M70.1666938486458,-91.1133089858469A115,115 0 1,1 -1.2326567555080623e-13,-115L-1.179062983529451e-13,-110A110,110 0 1,0 67.11596802913947,-87.15186076907095Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-2 ml-2 mb-0 border-0 rounded-0" style="width: 21rem; height: 10rem;  background-color: #00000030;">
                            <div class="card-body">
                                <div class="svg-5"
                                        style="font-size: 10px; position: absolute; margin-top: -16px; margin-left: -16px;">
                                        <svg width="21rem" height="1.7rem" style="background-color: none;">
                                            <text class="wind-dir" x="30" y="15">PRESSURE & TEMP</text>
                                            <text class="wind-dir" x="200" y="15">VISIBILITY & CLOUD</text>
                                        </svg>
                                    </div>
                                    <div class="svg-6"
                                        style="position: absolute; margin-left: -4px;">
                                        <svg width="8rem" height="0.05rem" style="background-color: white; margin-top: 5px;">
                                        </svg>
                                    </div>
                                    <div class="svg-7"
                                        style="position: absolute; margin-left: 168px;">
                                        <svg width="8rem" height="0.05rem" style="background-color: white; margin-top: 5px;">
                                        </svg>
                                    </div>
                                    <div class="svg-8"
                                        style="font-size: 10px; position: absolute; margin-top: 10px; margin-left: -16px;">
                                        <svg width="9.5rem" height="8.4rem" style="background-color: none;">
                                            <text class="wind-dir" x="20" y="20">QNH</text>
                                            <text class="wind-dir" x="70" y="20">{{ dataQnh1 }}</text>
                                            <text class="wind-dir" x="120" y="20">mb</text>
                                            <text class="wind-dir" x="20" y="45">QFE</text>
                                            <text class="wind-dir" x="70" y="45">999</text>
                                            <text class="wind-dir" x="120" y="45">mb</text>
                                            <text class="wind-dir" x="28" y="70">T</text>
                                            <text class="wind-dir" x="70" y="70">999</text>
                                            <text class="wind-dir" x="120" y="70">°C</text>
                                            <text class="wind-dir" x="25" y="95">DP</text>
                                            <text class="wind-dir" x="70" y="95">999</text>
                                            <text class="wind-dir" x="120" y="95">°C</text>
                                            <text class="wind-dir" x="24" y="120">RH</text>
                                            <text class="wind-dir" x="70" y="120">999</text>
                                            <text class="wind-dir" x="122.5" y="120">%</text>
                                        </svg>
                                    </div>
                                    <div class="svg-9"
                                        style="position: absolute; margin-left: 146px;">
                                        <svg width="0.09rem" height="9rem" style="background-color: white; margin-top: -10px;">
                                        </svg>
                                    </div>
                                    <div class="svg-10"
                                        style="font-size: 10px; position: absolute; margin-top: 10px; margin-left: 157px;">
                                        <svg width="10.2rem" height="8.4rem" style="background-color: none;">
                                            <text class="wind-dir" x="12" y="20">10-Minute</text>
                                            <text class="wind-dir" x="80" y="20">999</text>
                                            <text class="wind-dir" x="129" y="20">m</text>
                                            <text class="wind-dir" x="15" y="45">Min-Vis</text>
                                            <text class="wind-dir" x="80" y="45">999</text>
                                            <text class="wind-dir" x="128" y="45">mb</text>
                                            <text class="wind-dir" x="15" y="70">CL-Base</text>
                                            <text class="wind-dir" x="80" y="70">999</text>
                                            <text class="wind-dir" x="128" y="70">°C</text>
                                        </svg>
                                    </div>
                                    <div class="svg-11"
                                        style="font-size: 10px; position: absolute; margin-top: 87.9px; margin-left: 147.5px;">
                                        <svg width="10.79rem" height="3.5rem" style="background-color: rgba(0, 0, 0, 0.6);">
                                            <text class="wind-dir" x="15" y="21">CL-1 = 999m</text>
                                            <text class="wind-dir" x="15" y="42">CL-2 = 999m</text>
                                            <text class="wind-dir" x="100" y="21">CL-3 = 999m</text>
                                            <text class="wind-dir" x="100" y="42">CL-4 = 999m</text>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                    </div>

                    <!-- CARD RUNWAY 22222222222222222222222222 -->
                    <div class="box-2">
                        <div class="card mt-3 border-0 rounded-0"
                            style="width: 21rem; height: 3rem; background-color: #00000030;">
                            <div class="card-body">
                                <h5 class="card-title text-white">{{ title2 }}</h5>
                            </div>
                        </div>
                        <div class="card mt-2 border-0 rounded-0"
                            style="width: 21rem; height: 11rem; background-color: #00000030;">
                            <div class="card-body">
                                <img class="mt-0 ml-14 hover:scale-110 transition duration-500 cursor-pointer"
                                    @click="openModal('runway2.png')" style="width: 64%;" src="../../assets/runway2.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="card mt-2 border-0 rounded-0 text-white"
                            style="width: 21rem; height: 18rem; background-color: #00000030;">
                            <div class="card-body">
                                <h5 class="card-title">{{ windTitle2 }}</h5>
                                <div class="svg-1" style="font-size: 17px; ">
                                    <div class="svg-2" style="font-size: 16px; position: absolute;">
                                        <svg width="19rem" height="15rem" style="background-color: none;">
                                            <text class="wind-dir" x="39" y="125">W</text>
                                            <text class="wind-dir" x="254" y="125">E</text>
                                            <text class="wind-dir" x="149" y="19">N</text>
                                            <text class="wind-dir" x="149" y="233">S</text>
                                        </svg>
                                    </div>
                                    <div class="svg-3"
                                        style="font-size: 9px; position: absolute; margin-top: 188.8px; margin-left: -16px;">
                                        <svg width="5.5rem" height="3.5rem" style="background-color: rgba(0, 0, 0, 0.6);">
                                            <text class="wind-dir" x="10" y="15">
                                                <tspan>Max</tspan>
                                                <tspan dx="16.8">= {{ windMax2 }}</tspan>
                                            </text>
                                            <text class="wind-dir" x="10" y="32">
                                                <tspan>X Wind</tspan>
                                                <tspan dx="5">= {{ windX2 }}</tspan>
                                            </text>
                                            <text class="wind-dir" x="10" y="48">
                                                <tspan>Gusty</tspan>
                                                <tspan dx="10.7">= {{ windGusty2 }}</tspan>
                                            </text>
                                        </svg>
                                    </div>
                                    <div class="svg-4"
                                        style="font-size: 9px; position: absolute; margin-top: -43.2px; margin-left: 232px;">
                                        <svg width="5.5rem" height="1.7rem" style="background-color: none;">
                                            <text class="wind-dir" x="35" y="10">{{ windDate2 }}</text>
                                            <text class="wind-dir" x="24" y="22">{{ windTime2 }} UTC</text>
                                        </svg>
                                    </div>
                                    <svg width="19rem" height="15rem" style="background-color: none; scale: 0.85;">
                                        <g id="runway-svg" transform="translate(155,120) rotate(0,0,0)">
                                            <path fill="#a7a8aa" d="M-85,0a85,85 0 01 170,0a85,85 0 01-170,0Z">
                                            </path>
                                            <line x1="-85" y1="0" x2="85" y2="0" stroke="black" stroke-dasharray="10"
                                                stroke-width="2" />
                                            <g transform="translate(0,0) rotate(90,0,0)">
                                                <image xlink:href="../../assets/icon-pesawat.png" x="-15" y="-15" width="30"
                                                    height="30" />
                                            </g>
                                            <path fill="white" d="M79.5 -30 A84.8 -84.5 0 0 0 -79.4 -30" />
                                            <path fill="white" d="M-79.5 30 A-84.8 84.5 0 0 0 79.4 30" />
                                        </g>

                                        <!-- text-dalam -->
                                        <text class="wind-spd" x="120" y="70">Speed(Kt)</text>
                                        <text class="wind-data" id="ws2" x="145" y="95">{{ windSpeed2 }}</text>
                                        <text class="wind-spd" x="133" y="190">Dir (°)</text>
                                        <text class="wind-data" id="ws2" x="145" y="165">{{ windDir2 }}</text>
                                        <!-- text-dalam -->

                                        <g id="jarum-svg2" :transform="'translate(155,120) rotate(' + windDir2 + ',0,0)'">
                                            <path fill="rgba(0,0,0,0.2)" d="M-85,0a85,85 0 01 170,0a85,85 0 01-170,0Z">
                                            </path>
                                            <path fill="red"
                                                d="M5.204748896376251e-15,-85A85,85 0 0,1 5.9830228183746073,-84.94764019597635L0,0Z">
                                            </path>
                                        </g>
                                        <g id="1mnt-svg2" :transform="'translate(155,120) rotate(' + windDir2 + ',0,0)'">
                                            <path fill="red"
                                                d="M6.123233995736766e-15,-100A100,100 0 0,1 25.54457579357899,-96.68233886044597L24.26734700390004,-91.84822191742366A95,95 0 0,0 5.8170722959499274e-15,-95Z">
                                            </path>
                                            <path fill="#cccccc"
                                                d="M25.54457579357899,-96.68233886044597A100,100 0 1,1 -1.8369701987210297e-14,-100L-1.745121688784978e-14,-95A95,95 0 1,0 24.26734700390004,-91.84822191742366Z">
                                            </path>
                                        </g>
                                        <g id="10mnt-svg2" :transform="'translate(155,120) rotate(' + windDir2 + ',0,0)'">
                                            <path fill="#868688"
                                                d="M7.041719095097281e-15,-115A115,115 0 0,1 70.1666938486458,-91.1133089858469L67.11596802913947,-87.15186076907095A110,110 0 0,0 6.735557395310443e-15,-110Z">
                                            </path>
                                            <path fill="#cccccc"
                                                d="M70.1666938486458,-91.1133089858469A115,115 0 1,1 -1.2326567555080623e-13,-115L-1.179062983529451e-13,-110A110,110 0 1,0 67.11596802913947,-87.15186076907095Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-2 mb-0 border-0 rounded-0" style="width: 21rem; height: 10rem; background-color: #00000030;">
                            <div class="card-body">
                                <div class="svg-5"
                                        style="font-size: 10px; position: absolute; margin-top: -16px; margin-left: -16px;">
                                        <svg width="21rem" height="1.7rem" style="background-color: none;">
                                            <text class="wind-dir" x="30" y="15">PRESSURE & TEMP</text>
                                            <text class="wind-dir" x="200" y="15">VISIBILITY & CLOUD</text>
                                        </svg>
                                    </div>
                                    <div class="svg-6"
                                        style="position: absolute; margin-left: -4px;">
                                        <svg width="8rem" height="0.05rem" style="background-color: white; margin-top: 5px;">
                                        </svg>
                                    </div>
                                    <div class="svg-7"
                                        style="position: absolute; margin-left: 168px;">
                                        <svg width="8rem" height="0.05rem" style="background-color: white; margin-top: 5px;">
                                        </svg>
                                    </div>
                                    <div class="svg-8"
                                        style="font-size: 10px; position: absolute; margin-top: 10px; margin-left: -16px;">
                                        <svg width="9.5rem" height="8.4rem" style="background-color: none;">
                                            <text class="wind-dir" x="20" y="20">QNH</text>
                                            <text class="wind-dir" x="70" y="20">{{ dataQnh2 }}</text>
                                            <text class="wind-dir" x="120" y="20">mb</text>
                                            <text class="wind-dir" x="20" y="45">QFE</text>
                                            <text class="wind-dir" x="70" y="45">999</text>
                                            <text class="wind-dir" x="120" y="45">mb</text>
                                            <text class="wind-dir" x="28" y="70">T</text>
                                            <text class="wind-dir" x="70" y="70">999</text>
                                            <text class="wind-dir" x="120" y="70">°C</text>
                                            <text class="wind-dir" x="25" y="95">DP</text>
                                            <text class="wind-dir" x="70" y="95">999</text>
                                            <text class="wind-dir" x="120" y="95">°C</text>
                                            <text class="wind-dir" x="24" y="120">RH</text>
                                            <text class="wind-dir" x="70" y="120">999</text>
                                            <text class="wind-dir" x="122.5" y="120">%</text>
                                        </svg>
                                    </div>
                                    <div class="svg-9"
                                        style="position: absolute; margin-left: 146px;">
                                        <svg width="0.09rem" height="9rem" style="background-color: white; margin-top: -10px;">
                                        </svg>
                                    </div>
                                    <div class="svg-10"
                                        style="font-size: 10px; position: absolute; margin-top: 10px; margin-left: 157px;">
                                        <svg width="10.2rem" height="8.4rem" style="background-color: none;">
                                            <text class="wind-dir" x="12" y="20">10-Minute</text>
                                            <text class="wind-dir" x="80" y="20">999</text>
                                            <text class="wind-dir" x="129" y="20">m</text>
                                            <text class="wind-dir" x="15" y="45">Min-Vis</text>
                                            <text class="wind-dir" x="80" y="45">999</text>
                                            <text class="wind-dir" x="128" y="45">mb</text>
                                            <text class="wind-dir" x="15" y="70">CL-Base</text>
                                            <text class="wind-dir" x="80" y="70">999</text>
                                            <text class="wind-dir" x="128" y="70">°C</text>
                                        </svg>
                                    </div>
                                    <div class="svg-11"
                                        style="font-size: 10px; position: absolute; margin-top: 87.9px; margin-left: 147.5px;">
                                        <svg width="10.79rem" height="3.5rem" style="background-color: rgba(0, 0, 0, 0.6);">
                                            <text class="wind-dir" x="15" y="21">CL-1 = 999m</text>
                                            <text class="wind-dir" x="15" y="42">CL-2 = 999m</text>
                                            <text class="wind-dir" x="100" y="21">CL-3 = 999m</text>
                                            <text class="wind-dir" x="100" y="42">CL-4 = 999m</text>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <!-- CARD RUNWAY 333333333333333333333333333 -->
                    <div class="box-3">
                        <div class="card m-2 mt-3 border-0 rounded-0"
                            style="width: 21rem; height: 3rem; background-color: #00000030;">
                            <div class="card-body">
                                <h5 class="card-title text-white">{{ title3 }}</h5>
                            </div>
                        </div>
                        <div class="card m-2 border-0 rounded-0"
                            style="width: 21rem; height: 11rem; background-color: #00000030;">
                            <div class="card-body">
                                <img class="mt-0 ml-14 hover:scale-110 transition duration-500 cursor-pointer"
                                    @click="openModal('runway3.png')" style="width: 64%;" src="../../assets/runway3.png"
                                    alt="">
                            </div>
                        </div>
                        <div class="card m-2 border-0 rounded-0 text-white"
                            style="width: 21rem; height: 18rem; background-color: #00000030;">
                            <div class="card-body">
                                <h5 class="card-title">{{ windTitle3 }}</h5>
                                <div class="svg-1" style="font-size: 17px; ">
                                    <div class="svg-2" style="font-size: 16px; position: absolute;">
                                        <svg width="19rem" height="15rem" style="background-color: none;">
                                            <text class="wind-dir" x="39" y="125">W</text>
                                            <text class="wind-dir" x="254" y="125">E</text>
                                            <text class="wind-dir" x="149" y="19">N</text>
                                            <text class="wind-dir" x="149" y="233">S</text>
                                        </svg>
                                    </div>
                                    <div class="svg-3"
                                        style="font-size: 9px; position: absolute; margin-top: 188.8px; margin-left: -16px;">
                                        <svg width="5.5rem" height="3.5rem" style="background-color: rgba(0, 0, 0, 0.6);">
                                            <text class="wind-dir" x="10" y="15">
                                                <tspan>Max</tspan>
                                                <tspan dx="16.8">= {{ windMax3 }}</tspan>
                                            </text>
                                            <text class="wind-dir" x="10" y="32">
                                                <tspan>X Wind</tspan>
                                                <tspan dx="5">= {{ windX3 }}</tspan>
                                            </text>
                                            <text class="wind-dir" x="10" y="48">
                                                <tspan>Gusty</tspan>
                                                <tspan dx="10.7">= {{ windGusty3 }}</tspan>
                                            </text>
                                        </svg>
                                    </div>
                                    <div class="svg-4"
                                        style="font-size: 9px; position: absolute; margin-top: -43.2px; margin-left: 232px;">
                                        <svg width="5.5rem" height="1.7rem" style="background-color: none;">
                                            <text class="wind-dir" x="35" y="10">{{ windDate3 }}</text>
                                            <text class="wind-dir" x="24" y="22">{{ windTime3 }} UTC</text>
                                        </svg>
                                    </div>
                                    <svg width="19rem" height="15rem" style="background-color: none; scale: 0.85;">
                                        <g id="runway-svg" transform="translate(155,120) rotate(0,0,0)">
                                            <path fill="#a7a8aa" d="M-85,0a85,85 0 01 170,0a85,85 0 01-170,0Z">
                                            </path>
                                            <line x1="-85" y1="0" x2="85" y2="0" stroke="black" stroke-dasharray="10"
                                                stroke-width="2" />
                                            <g transform="translate(0,0) rotate(90,0,0)">
                                                <image xlink:href="../../assets/icon-pesawat.png" x="-15" y="-15" width="30"
                                                    height="30" />
                                            </g>
                                            <path fill="white" d="M79.5 -30 A84.8 -84.5 0 0 0 -79.4 -30" />
                                            <path fill="white" d="M-79.5 30 A-84.8 84.5 0 0 0 79.4 30" />
                                        </g>

                                        <!-- text-dalam -->
                                        <text class="wind-spd" x="120" y="70">Speed(Kt)</text>
                                        <text class="wind-data" id="ws2" x="150" y="95">{{ windSpeed3 }}</text>
                                        <text class="wind-spd" x="133" y="190">Dir (°)</text>
                                        <text class="wind-data" id="ws2" x="145" y="165">{{ windDir3 }}</text>
                                        <!-- text-dalam -->

                                        <g id="jarum-svg3" :transform="'translate(155,120) rotate(' + windDir3 + ',0,0)'">
                                            <path fill="rgba(0,0,0,0.2)" d="M-85,0a85,85 0 01 170,0a85,85 0 01-170,0Z">
                                            </path>
                                            <path fill="red"
                                                d="M5.204748896376251e-15,-85A85,85 0 0,1 5.9830228183746073,-84.94764019597635L0,0Z">
                                            </path>
                                        </g>
                                        <g id="1mnt-svg" :transform="'translate(155,120) rotate(' + windDir3 + ',0,0)'">
                                            <path fill="red"
                                                d="M6.123233995736766e-15,-100A100,100 0 0,1 25.54457579357899,-96.68233886044597L24.26734700390004,-91.84822191742366A95,95 0 0,0 5.8170722959499274e-15,-95Z">
                                            </path>
                                            <path fill="#cccccc"
                                                d="M25.54457579357899,-96.68233886044597A100,100 0 1,1 -1.8369701987210297e-14,-100L-1.745121688784978e-14,-95A95,95 0 1,0 24.26734700390004,-91.84822191742366Z">
                                            </path>
                                        </g>
                                        <g id="10mnt-svg" :transform="'translate(155,120) rotate(' + windDir3 + ',0,0)'">
                                            <path fill="#868688"
                                                d="M7.041719095097281e-15,-115A115,115 0 0,1 70.1666938486458,-91.1133089858469L67.11596802913947,-87.15186076907095A110,110 0 0,0 6.735557395310443e-15,-110Z">
                                            </path>
                                            <path fill="#cccccc"
                                                d="M70.1666938486458,-91.1133089858469A115,115 0 1,1 -1.2326567555080623e-13,-115L-1.179062983529451e-13,-110A110,110 0 1,0 67.11596802913947,-87.15186076907095Z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div class="card m-2 mb-0 border-0 rounded-0" style="width: 21rem; height: 10rem; background-color: #00000030;">
                            <div class="card-body">
                                <div class="svg-5"
                                        style="font-size: 10px; position: absolute; margin-top: -16px; margin-left: -16px;">
                                        <svg width="21rem" height="1.7rem" style="background-color: none;">
                                            <text class="wind-dir" x="30" y="15">PRESSURE & TEMP</text>
                                            <text class="wind-dir" x="200" y="15">VISIBILITY & CLOUD</text>
                                        </svg>
                                    </div>
                                    <div class="svg-6"
                                        style="position: absolute; margin-left: -4px;">
                                        <svg width="8rem" height="0.05rem" style="background-color: white; margin-top: 5px;">
                                        </svg>
                                    </div>
                                    <div class="svg-7"
                                        style="position: absolute; margin-left: 168px;">
                                        <svg width="8rem" height="0.05rem" style="background-color: white; margin-top: 5px;">
                                        </svg>
                                    </div>
                                    <div class="svg-8"
                                        style="font-size: 10px; position: absolute; margin-top: 10px; margin-left: -16px;">
                                        <svg width="9.5rem" height="8.4rem" style="background-color: none;">
                                            <text class="wind-dir" x="20" y="20">QNH</text>
                                            <text class="wind-dir" x="70" y="20">{{ dataQnh3 }}</text>
                                            <text class="wind-dir" x="120" y="20">mb</text>
                                            <text class="wind-dir" x="20" y="45">QFE</text>
                                            <text class="wind-dir" x="70" y="45">999</text>
                                            <text class="wind-dir" x="120" y="45">mb</text>
                                            <text class="wind-dir" x="28" y="70">T</text>
                                            <text class="wind-dir" x="70" y="70">999</text>
                                            <text class="wind-dir" x="120" y="70">°C</text>
                                            <text class="wind-dir" x="25" y="95">DP</text>
                                            <text class="wind-dir" x="70" y="95">999</text>
                                            <text class="wind-dir" x="120" y="95">°C</text>
                                            <text class="wind-dir" x="24" y="120">RH</text>
                                            <text class="wind-dir" x="70" y="120">999</text>
                                            <text class="wind-dir" x="122.5" y="120">%</text>
                                        </svg>
                                    </div>
                                    <div class="svg-9"
                                        style="position: absolute; margin-left: 146px;">
                                        <svg width="0.09rem" height="9rem" style="background-color: white; margin-top: -10px;">
                                        </svg>
                                    </div>
                                    <div class="svg-10"
                                        style="font-size: 10px; position: absolute; margin-top: 10px; margin-left: 157px;">
                                        <svg width="10.2rem" height="8.4rem" style="background-color: none;">
                                            <text class="wind-dir" x="12" y="20">10-Minute</text>
                                            <text class="wind-dir" x="80" y="20">999</text>
                                            <text class="wind-dir" x="129" y="20">m</text>
                                            <text class="wind-dir" x="15" y="45">Min-Vis</text>
                                            <text class="wind-dir" x="80" y="45">999</text>
                                            <text class="wind-dir" x="128" y="45">mb</text>
                                            <text class="wind-dir" x="15" y="70">CL-Base</text>
                                            <text class="wind-dir" x="80" y="70">999</text>
                                            <text class="wind-dir" x="128" y="70">°C</text>
                                        </svg>
                                    </div>
                                    <div class="svg-11"
                                        style="font-size: 10px; position: absolute; margin-top: 87.9px; margin-left: 147.5px;">
                                        <svg width="10.79rem" height="3.5rem" style="background-color: rgba(0, 0, 0, 0.6);">
                                            <text class="wind-dir" x="15" y="21">CL-1 = 999m</text>
                                            <text class="wind-dir" x="15" y="42">CL-2 = 999m</text>
                                            <text class="wind-dir" x="100" y="21">CL-3 = 999m</text>
                                            <text class="wind-dir" x="100" y="42">CL-4 = 999m</text>
                                        </svg>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import { string } from 'vue-router';
import { int } from 'vue-router';
export default {
    name: 'CardAwosComponents',
    props: {
    title1: string, 
    title2: string, 
    title3: string,
    
    windTitle1: string, 
    windTitle2: string, 
    windTitle3: string,

    windDate1: string, 
    windDate2: string, 
    windDate3: string,

    windTime1: string, 
    windTime2: string, 
    windTime3: string,

    windSpeed1: int, 
    windSpeed2: int, 
    windSpeed3: int,

    windDir1: int, 
    windDir2: int, 
    windDir3: int,

    windMax1: int, 
    windMax2: int, 
    windMax3: int,

    windX1: int, 
    windX2: int, 
    windX3: int,

    windGusty1: int, 
    windGusty2: int, 
    windGusty3: int,

    dataQnh1: int,
    dataQnh2: int,
    dataQnh3: int,
  },
    data() {
        return {
            modalOpen: false,
            currentImage: ''
        }
    },
    methods: {
        openModal(imageName) {
            this.currentImage = imageName;
            this.modalOpen = true;
        },
        closeModalOutside(event) {
            if (event.target.classList.contains('modal-box')) {
                this.modalOpen = false;
            }
        }
    }
}
</script>

<style scoped>
.wind-dir {
    fill: white;
}

.modal-box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.modal-img {
    max-width: 80%;
    max-height: 80%;
    display: block;
    margin: 0 auto;
    animation: modalzise 0.5s forwards;
}
@media only screen and (min-width: 1280px) {
    .box-1 {
    animation: slide1 1.5s forwards, opacity 1.5s forwards;
}

.box-2 {
    animation: slide2 1.5s  forwards, opacity 1.5s forwards;
}

.box-3 {
    animation: slide3 1.5s  forwards, opacity 1.5s forwards;
}

@keyframes slide1 {
    from {
        transform: translateX(-166px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide2 {
    from {
        transform: translateY(-166px);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slide3 {
    from {
        transform: translateX(166px);
    }
    to {
        transform: translateY(0);
    }
}


@keyframes opacity{
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
}
@keyframes modalzise{
    from {
        transform: scale(0);
    }
    to {
        transform: scale(1);
    }
}
</style>