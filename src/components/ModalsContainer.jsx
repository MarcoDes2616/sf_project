import LoginPage from '../pages/login/LoginPage';
import RedirectModal from './redirectModal/RedirectModal';
import Loading from './Loading';
import { useContext } from 'react';
import MainContext from '../context/MainContext';

const ModalsContainer = () => {
    const {loading} = useContext(MainContext)
    return (
        <>
            <LoginPage />
            <RedirectModal />
            <Loading loading={loading} />
        </>
    );
};

export default ModalsContainer;