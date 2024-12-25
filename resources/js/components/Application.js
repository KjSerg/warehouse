import {gsap} from "gsap";
import {burger} from "./_burger";
import {numberInput} from "./_number-input";
import Calculator from "./Calculator";
import {accordion} from "./_accardion";
import GoogleMap from "./GoogleMap";
import {fancyboxInit} from "./fancybox-init";
import Slick from "./Slick";


export default class Application {
    constructor() {
        this.$doc = $(document);
        this.initSvgAnimation();
        this.initComponents();
        this.removeAnimation = false;
        this.speed = 0.01;
    }

    initSvgAnimation() {
        const t = this;
        console.log(t)
        document.querySelectorAll('.form-label').forEach(function (label) {
            const svg = label.querySelector('.icon svg');
            if (svg) {
                const paths = svg.querySelectorAll('path');
                if (paths) {
                    label.querySelector('input').addEventListener('focus', () => {
                        const timeline = gsap.timeline({
                            repeat: -1,
                            repeatDelay: 0.1,
                            defaults: {ease: 'power1.inOut'}
                        });
                        let delay = 0;
                        paths.forEach((path, index) => {
                            const length = path.getTotalLength();
                            let duration = t.speed;
                            path.style.strokeDasharray = length;
                            path.style.strokeDashoffset = length;
                            timeline.to(path, {
                                strokeDashoffset: 0,
                                duration: duration,
                                delay: delay,
                            });
                            delay = delay + (duration / 2);
                        });
                    });
                    label.querySelector('input').addEventListener('blur', () => {
                        gsap.globalTimeline.clear();
                        gsap.killTweensOf(paths);
                        if (t.removeAnimation) {
                            paths.forEach((path, index) => {
                                path.style = '';
                            });
                        }
                    });
                }
            }
        });
    }

    initComponents() {
        const t = this;
        const $doc = t.$doc;
        $doc.ready(function () {
            burger();
            numberInput();
            accordion();
            fancyboxInit();
            const calc = new Calculator();
            const map = new GoogleMap();
            const sliders = new Slick();
        });
    }
}