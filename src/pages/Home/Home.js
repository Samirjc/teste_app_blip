import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import settings from '../../config';
import Header from './components/Header';
import { getContacts } from '../../utils/getContacts';

const PAGE_ICON = 'plugin';
const BLANK = '_blank';

const Home = () => {
    const { t } = useTranslation();
    const [contacts, setContacts] = useState();

    return (
        <div className="ph1 ph4-m ph5-ns pb5">
            <Header
                title={t('title.homePage')}
                icon={PAGE_ICON}
                onClick={() => window.open(settings.repositoryUrl, BLANK)}
            />
            <div className="flex flex-column items-center justify-center bp-c-neutral-dark-city f5 h-100 mt4">
                <button onClick={() => getContacts().then(res => setContacts(res.response.items))} type="button">
                    Retornar últimos 10 contatos
                </button>

                <div>
                    {contacts?.map((item) => (
                        <div className='mt4' style={{ border: "1px solid black", padding: "10px" }}>
                            <p><strong>nome:</strong> {item.name}</p>
                            <p><strong>data da última mensagem:</strong> {item.lastMessageDate.split('T')[0]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

Home.propTypes = {};

export default Home;
