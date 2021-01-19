import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import React from 'react';
import {useLocation} from 'react-router-dom';
import {
    calendarClearOutline, calendarClearSharp,
    globeOutline, globeSharp, hammerOutline, hammerSharp,
    homeOutline, homeSharp, personOutline, personSharp,
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Dashboard',
        url: '/page/Dashboard',
        iosIcon: globeOutline,
        mdIcon: globeSharp
    },
    {
        title: 'Profile',
        url: '/page/Profile',
        iosIcon: personOutline,
        mdIcon: personSharp
    },
    {
        title: 'Marketplace',
        url: '/page/Marketplace',
        iosIcon: homeOutline,
        mdIcon: homeSharp
    },
    {
        title: 'Jobs',
        url: '/page/Jobs',
        iosIcon: hammerOutline,
        mdIcon: hammerSharp
    },
    {
        title: 'Schedule',
        url: '/page/Schedule',
        iosIcon: calendarClearOutline,
        mdIcon: calendarClearSharp
    }
];

const Menu: React.FC = () => {
    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="menu-list">
                    <IonListHeader>Kristiina</IonListHeader>
                    <IonNote>Welcome Demo</IonNote>
                    {appPages.map((appPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem className={location.pathname === appPage.url ? 'selected' : ''}
                                         routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon}/>
                                    <IonLabel>{appPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
