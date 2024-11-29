import { useSpring, animated } from 'react-spring';

export default function Contact(){
    const props = useSpring({
        from: { opacity: 0, transform: 'translateY(-50px)' }, // Boshlanish holati
        to: { opacity: 1, transform: 'translateY(0)' }, // Tugash holati
        config: { duration: 500 }, // Animatsiya davomiyligi
    });
    return (
        <div className="">
            Contact
            <animated.div style={props}>
                <div className="flex justify-between">
                    <h1>Salom, bu animatsiyali komponent!</h1>
                    <p>Bu matn sahnaga kirganda animatsiya bilan ko'rinadi.</p>
                </div>
                <img src="./../../public/reklama maket.png" alt="images" />
            </animated.div>
        </div>
    )
}