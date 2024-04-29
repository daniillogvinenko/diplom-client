import { useScroll, motion, useTransform } from "framer-motion";
import classes from "./ParallaxBg.module.scss";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { NavLink } from "react-router-dom";

export const ParallaxBg = () => {
    const { scrollY } = useScroll();
    const offset1 = useTransform(scrollY, [0, 1000], [0, 900]);
    const offset2 = useTransform(scrollY, [0, 1000], [0, 750]);
    const offset3 = useTransform(scrollY, [0, 1000], [0, 450]);
    const offset4 = useTransform(scrollY, [0, 1000], [0, 300]);

    const animationVariants = {
        initial: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
        },
    };

    return (
        <div className={classes.container}>
            <motion.div style={{ top: offset1 }} className={classes.bg1}></motion.div>
            <motion.div style={{ top: offset2 }} className={classes.bg2}></motion.div>
            <motion.div style={{ top: offset3 }} className={classes.bg3}></motion.div>
            <motion.div style={{ top: offset4 }} className={classes.bg4}></motion.div>
            <div className={classes.blur}></div>
            <motion.div
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 2.2 }}
                variants={animationVariants}
                initial="initial"
                whileInView="animate"
                className={classes.title}
            >
                <Text className={classes.text} tagType="h1" color="white" textType="h1">
                    ADDIS FLAVORS - ЭФИОПСКАЯ КУХНЯ <br /> В САНКТ-ПЕТЕРБУРГЕ
                </Text>
                <NavLink to="/menu">
                    <Button variant="outline">ПОСМОТРЕТЬ МЕНЮ</Button>
                </NavLink>
            </motion.div>
        </div>
    );
};
