import { useScroll, motion, useTransform } from "framer-motion";
import classes from "./ParallaxBg.module.scss";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";

export const ParallaxBg = () => {
    const { scrollY } = useScroll();
    const offset1 = useTransform(scrollY, [0, 1000], [0, 900]);
    const offset2 = useTransform(scrollY, [0, 1000], [0, 750]);
    const offset3 = useTransform(scrollY, [0, 1000], [0, 450]);
    const offset4 = useTransform(scrollY, [0, 1000], [0, 300]);

    return (
        <div className={classes.container}>
            <motion.div style={{ top: offset1 }} className={classes.bg1}></motion.div>
            <motion.div style={{ top: offset2 }} className={classes.bg2}></motion.div>
            <motion.div style={{ top: offset3 }} className={classes.bg3}></motion.div>
            <motion.div style={{ top: offset4 }} className={classes.bg4}></motion.div>
            <div className={classes.blur}></div>
            <div className={classes.title}>
                <div>
                    <Text tagType="h1" color="white" textType="h1">
                        ЭФИОПСКАЯ КУХНЯ <br /> В САНКТ-ПЕТЕРБУРГЕ
                    </Text>
                </div>

                <Button variant="outline">ПОСМОТРЕТЬ МЕНЮ</Button>
            </div>
        </div>
    );
};
