
const arrow = document.getElementById('mover');
const curve = document.getElementById('curve');

const PATH = "M74.3818 2C68.0791 47.0194 69.0764 74.0978 85.2656 108.5C91.9728 122.753 103.882 131.5 116.516 162.856C134.926 208.547 108.749 266.381 85.2656 304.961C65.9235 336.738 36.6213 367.991 27.8642 405.208C20.5861 436.14 14.4709 465.562 31.1536 494.436C34.997 501.088 39.3409 507.774 44.2305 514.112M44.2305 514.112C53.6418 526.311 65.0747 537.219 78.8512 544.107C103.564 556.463 129.045 553.275 134.443 522.232C138.851 496.888 120.185 484.655 96.6966 480.867C76.0787 477.541 53.0205 494.796 44.2305 514.112ZM44.2305 514.112C43.0588 516.687 42.1406 519.298 41.5155 521.903C33.4829 555.372 33.3832 596.806 41.1866 630.62C47.2095 656.719 59.839 683.057 71.7788 706.936C83.7814 730.942 92.69 750.398 94.394 777.66C95.8039 800.219 90.7079 809.419 73.7525 823.548C37.3471 853.886 30.4315 897.92 41.5155 941.148C46.5775 960.89 56.7205 978.266 62.5682 997.48C63.3663 1000.1 64.1321 1002.87 64.8421 1005.75M64.8421 1005.75C72.7676 1037.86 73.7243 1083.61 34.6898 1092.79C16.3032 1097.12 6.28875 1068.68 3.52197 1056.03C-1.55985 1032.8 6.09025 1019.95 26.3839 1010.06C37.843 1004.48 52.403 1006.31 64.8421 1005.75ZM64.8421 1005.75C97.8982 1004.26 113.557 1035.5 127.042 1060.88C178.369 1157.5 100.506 1153.43 64.3818 1200.5C24.0857 1253 84.9122 1263.07 97.8908 1316.5C109.204 1363.07 81.0203 1374.47 64.3818 1405.5C35.3587 1459.62 135.382 1662 64.3818 1695C3.88187 1723.12 2.37649 1610.59 40.3818 1609.5C150.122 1606.34 121.917 1863.38 85.6475 1922.96C66.3054 1954.74 37.0031 1985.99 28.246 2023.21C20.9679 2054.14 14.8527 2083.56 31.5355 2112.44C35.3788 2119.09 39.7227 2125.77 44.6124 2132.11M44.6124 2132.11C54.0236 2144.31 65.4565 2155.22 79.233 2162.11C103.946 2174.46 129.426 2171.28 134.825 2140.23C139.233 2114.89 120.567 2102.65 97.0784 2098.87C76.4605 2095.54 53.4023 2112.8 44.6124 2132.11ZM44.6124 2132.11C43.4406 2134.69 42.5224 2137.3 41.8974 2139.9C33.8647 2173.37 33.7651 2214.81 41.5684 2248.62C47.5913 2274.72 60.2209 2301.06 72.1606 2324.94C84.1633 2348.94 93.0719 2368.4 94.7758 2395.66C96.1858 2418.22 91.0898 2427.42 74.1343 2441.55C37.7289 2471.89 30.8134 2515.92 41.8973 2559.15C46.9594 2578.89 57.1024 2596.27 62.95 2615.48C63.7481 2618.1 64.514 2620.87 65.2239 2623.75M65.2239 2623.75C73.1495 2655.86 74.1061 2701.61 35.0717 2710.79C16.6851 2715.12 6.67059 2686.68 3.90381 2674.03C-1.17801 2650.8 6.47208 2637.95 26.7657 2628.06C38.2248 2622.48 52.7848 2624.31 65.2239 2623.75ZM65.2239 2623.75C98.2801 2622.26 113.939 2653.5 127.424 2678.88C133.524 2690.37 135.35 2703.91 138.773 2716.39C149.262 2754.61 145.56 2772.5 105.264 2825C64.9675 2877.5 125.794 2887.57 138.773 2941C150.086 2987.57 146.443 2997.93 116.882 3046.5C87.3202 3095.07 47.2362 3075.5 28.246 3156.21C20.9679 3187.14 14.8527 3216.56 31.5355 3245.44C35.3788 3252.09 39.7227 3258.77 44.6124 3265.11M44.6124 3265.11C54.0236 3277.31 65.4565 3288.22 79.233 3295.11C103.946 3307.46 129.426 3304.28 134.825 3273.23C139.233 3247.89 120.567 3235.65 97.0784 3231.87C76.4605 3228.54 53.4023 3245.8 44.6124 3265.11ZM44.6124 3265.11C43.4406 3267.69 42.5224 3270.3 41.8974 3272.9C33.8647 3306.37 33.7651 3347.81 41.5684 3381.62C47.5913 3407.72 60.2209 3434.06 72.1606 3457.94C84.1633 3481.94 93.0719 3501.4 94.7758 3528.66C96.1858 3551.22 91.0898 3560.42 74.1343 3574.55C37.7289 3604.89 30.8134 3648.92 41.8973 3692.15C46.9594 3711.89 57.1024 3729.27 62.95 3748.48C63.7481 3751.1 64.514 3753.87 65.2239 3756.75M65.2239 3756.75C73.1495 3788.86 74.1061 3834.61 35.0717 3843.79C16.6851 3848.12 6.67059 3819.68 3.90381 3807.03C-1.17801 3783.8 6.47208 3770.95 26.7657 3761.06C38.2248 3755.48 52.7848 3757.31 65.2239 3756.75ZM65.2239 3756.75C98.2801 3755.26 113.939 3786.5 127.424 3811.88C178.751 3908.5 100.888 3904.43 64.7637 3951.5C24.4675 4004 85.294 4014.07 98.2727 4067.5C109.586 4114.07 81.4022 4125.47 64.7637 4156.5C35.7406 4210.62 135.764 4413 64.7637 4446C4.26371 4474.12 2.75832 4361.59 40.7637 4360.5C150.504 4357.34 122.299 4614.38 86.0293 4673.96C66.6872 4705.74 37.385 4736.99 28.6278 4774.21C21.3498 4805.14 15.2346 4834.56 31.9173 4863.44C35.7607 4870.09 40.1046 4876.77 44.9942 4883.11M44.9942 4883.11C54.4055 4895.31 65.8384 4906.22 79.6148 4913.11C104.327 4925.46 129.808 4922.28 135.207 4891.23C139.615 4865.89 120.949 4853.65 97.4603 4849.87C76.8424 4846.54 53.7841 4863.8 44.9942 4883.11ZM44.9942 4883.11C43.8224 4885.69 42.9042 4888.3 42.2792 4890.9C34.2465 4924.37 34.1469 4965.81 41.9502 4999.62C47.9731 5025.72 60.6027 5052.06 72.5424 5075.94C84.5451 5099.94 93.4537 5119.4 95.1576 5146.66C96.5676 5169.22 91.4716 5178.42 74.5161 5192.55C38.1108 5222.89 31.1952 5266.92 42.2792 5310.15C47.3412 5329.89 57.4842 5347.27 63.3319 5366.48C64.1299 5369.1 64.8958 5371.87 65.6057 5374.75M65.6057 5374.75C73.5313 5406.86 74.488 5452.61 35.4535 5461.79C17.0669 5466.12 7.05243 5437.68 4.28565 5425.03C-0.796178 5401.8 6.85392 5388.95 27.1476 5379.06C38.6067 5373.48 53.1667 5375.31 65.6057 5374.75ZM65.6057 5374.75C98.6619 5373.26 114.32 5404.5 127.806 5429.88C133.905 5441.37 135.732 5454.91 139.154 5467.38C149.644 5505.61 145.942 5523.5 105.645 5576C65.3493 5628.5 126.176 5638.57 139.154 5692C150.468 5738.57 115.618 5762.5 90.8818 5792C66.9797 5820.51 37.0031 5866.03 28.246 5903.25C20.9679 5934.18 14.8527 5963.6 31.5355 5992.47C35.3788 5999.13 39.7227 6005.81 44.6124 6012.15M44.6124 6012.15C54.0236 6024.35 65.4565 6035.26 79.233 6042.15C103.946 6054.5 129.426 6051.31 134.825 6020.27C139.233 5994.93 120.567 5982.69 97.0784 5978.91C76.4605 5975.58 53.4023 5992.83 44.6124 6012.15ZM44.6124 6012.15C43.4406 6014.73 42.5224 6017.34 41.8974 6019.94C33.8647 6053.41 33.7651 6094.84 41.5684 6128.66C47.5913 6154.76 60.2209 6181.1 72.1606 6204.97C84.1633 6228.98 93.0719 6248.44 94.7758 6275.7C96.1858 6298.26 91.0898 6307.46 74.1343 6321.59C37.7289 6351.92 30.8134 6395.96 41.8973 6439.19C46.9594 6458.93 57.1024 6476.3 62.95 6495.52C63.7481 6498.14 64.514 6500.91 65.2239 6503.79M65.2239 6503.79C73.1495 6535.9 74.1061 6581.65 35.0717 6590.83C16.6851 6595.16 6.67059 6566.72 3.90381 6554.07C-1.17801 6530.84 6.47208 6517.99 26.7657 6508.1C38.2248 6502.52 52.7848 6504.35 65.2239 6503.79ZM65.2239 6503.79C98.2801 6502.3 113.939 6533.54 127.424 6558.92C178.751 6655.54 100.888 6651.47 64.7637 6698.54C24.4675 6751.04 85.294 6761.11 98.2727 6814.54C109.586 6861.11 81.4022 6872.51 64.7637 6903.54C35.7406 6957.66 135.764 7160.04 64.7637 7193.04C4.26371 7221.16 2.75832 7108.63 40.7637 7107.54C150.504 7104.38 122.299 7361.41 86.0293 7421C66.6872 7452.78 37.385 7484.03 28.6278 7521.25C21.3498 7552.18 15.2346 7581.6 31.9173 7610.47C35.7607 7617.13 40.1046 7623.81 44.9942 7630.15M44.9942 7630.15C54.4055 7642.35 65.8384 7653.26 79.6148 7660.15C104.327 7672.5 129.808 7669.31 135.207 7638.27C139.615 7612.93 120.949 7600.69 97.4603 7596.91C76.8424 7593.58 53.7841 7610.83 44.9942 7630.15ZM44.9942 7630.15C43.8224 7632.73 42.9042 7635.34 42.2792 7637.94C34.2465 7671.41 34.1469 7712.84 41.9502 7746.66C47.9731 7772.76 60.6027 7799.1 72.5424 7822.97C84.5451 7846.98 93.4537 7866.44 95.1576 7893.7C96.5676 7916.26 91.4716 7925.46 74.5161 7939.59C38.1108 7969.92 31.1952 8013.96 42.2792 8057.19C47.3412 8076.93 57.4842 8094.3 63.3319 8113.52C64.1299 8116.14 64.8958 8118.91 65.6057 8121.79M65.6057 8121.79C73.5313 8153.9 74.488 8199.65 35.4535 8208.83C17.0669 8213.16 7.05243 8184.72 4.28565 8172.07C-0.796178 8148.84 6.85392 8135.99 27.1476 8126.1C38.6067 8120.52 53.1667 8122.35 65.6057 8121.79ZM65.6057 8121.79C98.6619 8120.3 114.32 8151.54 127.806 8176.92C133.905 8188.4 135.732 8201.95 139.154 8214.42C149.644 8252.65 145.942 8270.54 105.645 8323.04C65.3493 8375.54 126.176 8385.61 139.154 8439.04C150.468 8485.61 146.825 8495.97 117.264 8544.54C87.702 8593.1 47.6181 8573.54 28.6278 8654.25C21.3498 8685.18 15.2346 8714.6 31.9173 8743.47C35.7607 8750.13 40.1046 8756.81 44.9942 8763.15M44.9942 8763.15C54.4055 8775.35 65.8384 8786.26 79.6148 8793.15C104.327 8805.5 129.808 8802.31 135.207 8771.27C139.615 8745.93 120.949 8733.69 97.4603 8729.91C76.8424 8726.58 53.7841 8743.83 44.9942 8763.15ZM44.9942 8763.15C43.8224 8765.73 42.9042 8768.34 42.2792 8770.94C34.2465 8804.41 34.1469 8845.84 41.9502 8879.66C47.9731 8905.76 60.6027 8932.1 72.5424 8955.97C84.5451 8979.98 93.4537 8999.44 95.1576 9026.7C96.5676 9049.26 91.4716 9058.46 74.5161 9072.59C38.1108 9102.92 31.1952 9146.96 42.2792 9190.19C47.3412 9209.93 57.4842 9227.3 63.3319 9246.52C64.1299 9249.14 64.8958 9251.91 65.6057 9254.79M65.6057 9254.79C73.5313 9286.9 74.488 9332.65 35.4535 9341.83C17.0669 9346.16 7.05243 9317.72 4.28565 9305.07C-0.796178 9281.84 6.85392 9268.99 27.1476 9259.1C38.6067 9253.52 53.1667 9255.35 65.6057 9254.79ZM65.6057 9254.79C98.6619 9253.3 114.32 9284.54 127.806 9309.92C179.133 9406.54 101.269 9402.47 65.1455 9449.54C24.8493 9502.04 85.6759 9512.11 98.6545 9565.54C109.968 9612.11 81.784 9623.51 65.1455 9654.54C36.1224 9708.66 136.146 9911.04 65.1455 9944.04C4.64555 9972.16 3.14016 9859.63 41.1455 9858.54C150.886 9855.38 122.681 10112.4 86.4111 10172C67.069 10203.8 37.7668 10235 29.0097 10272.2C21.7316 10303.2 15.6164 10332.6 32.2991 10361.5C36.1425 10368.1 40.4864 10374.8 45.376 10381.2M45.376 10381.2C54.7873 10393.3 66.2202 10404.3 79.9967 10411.1C104.709 10423.5 130.19 10420.3 135.589 10389.3C139.997 10363.9 121.331 10351.7 97.8421 10347.9C77.2242 10344.6 54.166 10361.8 45.376 10381.2ZM45.376 10381.2C44.2043 10383.7 43.2861 10386.3 42.661 10388.9C34.6284 10422.4 34.5288 10463.8 42.3321 10497.7C48.355 10523.8 60.9845 10550.1 72.9243 10574C84.9269 10598 93.8356 10617.4 95.5395 10644.7C96.9494 10667.3 91.8534 10676.5 74.898 10690.6C38.4926 10720.9 31.577 10765 42.661 10808.2C47.723 10827.9 57.866 10845.3 63.7137 10864.5C64.5118 10867.1 65.2776 10869.9 65.9876 10872.8M65.9876 10872.8C73.9131 10904.9 74.8698 10950.6 35.8353 10959.8C17.4488 10964.2 7.43426 10935.7 4.66748 10923.1C-0.414342 10899.8 7.23576 10887 27.5294 10877.1C38.9885 10871.5 53.5485 10873.3 65.9876 10872.8ZM65.9876 10872.8C99.0437 10871.3 114.702 10902.5 128.188 10927.9C134.287 10939.4 136.114 10953 139.536 10965.4C150.026 11003.7 146.323 11021.5 106.027 11074C65.7311 11126.5 126.558 11136.6 139.536 11190C150.85 11236.6 144.882 11246.5 106.027 11279C77.5073 11302.9 40.6744 11342.3 31.9173 11379.5C24.6392 11410.4 15.2346 11471.6 31.9173 11500.5C35.7607 11507.1 40.1046 11513.8 44.9942 11520.2M44.9942 11520.2C54.4055 11532.3 65.8384 11543.3 79.6148 11550.1C104.327 11562.5 129.808 11559.3 135.207 11528.3C139.615 11502.9 120.949 11490.7 97.4603 11486.9C76.8424 11483.6 53.7841 11500.8 44.9942 11520.2ZM44.9942 11520.2C43.8224 11522.7 42.9042 11525.3 42.2792 11527.9C34.2465 11561.4 34.1469 11602.8 41.9502 11636.7C47.9731 11662.8 60.6027 11689.1 72.5424 11713C84.5451 11737 93.4537 11756.4 95.1576 11783.7C96.5676 11806.3 91.4716 11815.5 74.5161 11829.6C38.1108 11859.9 31.1952 11904 42.2792 11947.2";
curve.setAttribute("d", PATH);

arrow.style.motionPath = `path("${PATH}")`
arrow.style.offsetPath = `path("${PATH}")`

const scrollY = () => window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop

const adjustPointer = (t) => {// parameter 0->1 to parametrize position on curve
    t = Math.max(t, 0)
    t = Math.min(t, 1)

    mover.style.motionOffset = `${t * 100}%`
    mover.style.offsetDistance = `${t * 100}%`
}

window.addEventListener("scroll", () => {
    const { y, height } = curve.getBoundingClientRect()

    const curveInitial = y + scrollY();

    if (y < window.innerHeight / 2) {

        const p0 = curveInitial - window.innerHeight / 2;

        const t = (scrollY() - p0) / curve.getBoundingClientRect().height;

        adjustPointer(t)
    }
})

const timeline = document.querySelector(".timeline");
const content = document.querySelector(".content");
const maxWidth = 1200;

const timelineBaseHeight = timeline.getBoundingClientRect().height

const calcScale = () => 1.05 * content.getBoundingClientRect().height / timelineBaseHeight

const adjustTimelineScale = () => {
    // debugger
    timeline.style.transform = `translate(-50%) scale(${calcScale()})`
}

adjustTimelineScale(calcScale());

window.addEventListener('resize', adjustTimelineScale);
window.addEventListener('load', adjustTimelineScale);
// transform: translate(-50%) scale(0.4, 0.4);

// @media (min-width: $breakpoint-tablet) {
//     & {
//         transform: translate(-50%) scale(0.8, 0.8);
//     }
// }

// @media (min-width: $breakpoint-desktop) {
//     & {
//         transform: translate(-50%) scale(1, 1);
//     }
// }


// ============================================================


const panicBtn = document.getElementById('panic');
const audio = document.getElementById('audio');
const boca = document.querySelector('img.boca');
let firstTime = true;

panicBtn.onclick = () => {
    const delay = firstTime ? 1.2 : 0;

    if (audio.paused) {
        audio.play();

        panicBtn.style.filter = "hue-rotate(90deg)";
        boca.style.animation = `anim-boca 0.4s ease ${delay}s infinite alternate`;
    }
    else {
        audio.pause();

        panicBtn.style.filter = "hue-rotate(0deg)";
        boca.style.animation = "none";

    }

    firstTime = false
}






