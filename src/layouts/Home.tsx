import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageLayout from "./PageLayout";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export default function Home() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        navigate("/accounts");
    }, [navigate]);

    return (
        <AnimatePresence mode="popLayout">
            <PageLayout>
                <motion.div
                    key={pathname}
                    variants={pageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Outlet />
                </motion.div>
            </PageLayout>
        </AnimatePresence>
    );
}
