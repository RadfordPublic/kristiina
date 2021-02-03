import {
    IonContent, IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote, IonTitle,
    useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave,
} from '@ionic/react';

import React from 'react';
import {useLocation} from 'react-router-dom';
import {
    barChartOutline,
    barChartSharp,
    calculatorOutline,
    calculatorSharp,
    calendarClearOutline,
    calendarClearSharp,
    globeOutline,
    globeSharp,
    hammerOutline,
    hammerSharp,
    handRightOutline,
    handRightSharp,
    homeOutline,
    homeSharp,
    personOutline,
    personSharp,
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
        url: '/page/dashboard',
        iosIcon: globeOutline,
        mdIcon: globeSharp
    },
    {
        title: 'Profile',
        url: '/page/profile',
        iosIcon: personOutline,
        mdIcon: personSharp
    },
    {
        title: 'Marketplace',
        url: '/page/marketplace',
        iosIcon: homeOutline,
        mdIcon: homeSharp
    },
    {
        title: 'Jobs',
        url: '/page/jobs',
        iosIcon: hammerOutline,
        mdIcon: hammerSharp
    },
    {
        title: 'Analytics',
        url: '/page/analytics',
        iosIcon: barChartOutline,
        mdIcon: barChartSharp
    },
    {
        title: 'Schedule',
        url: '/page/schedule',
        iosIcon: calendarClearOutline,
        mdIcon: calendarClearSharp
    },
    {
        title: 'Banking',
        url: '/page/banking',
        iosIcon: calculatorOutline,
        mdIcon: calculatorSharp
    }
];

const Menu: React.FC = () => {

    useIonViewDidEnter(() => {
        console.log('ionViewDidEnter event fired');
    });

    useIonViewDidLeave(() => {
        console.log('ionViewDidLeave event fired');
    });

    useIonViewWillEnter(() => {
        console.log('ionViewWillEnter event fired');
    });

    useIonViewWillLeave(() => {
        console.log('ionViewWillLeave event fired');
    });

    const location = useLocation();

    return (
        <IonMenu contentId="main" type="overlay">
            <IonContent>
                <IonList id="menu-list">
                    <IonTitle>Tiion</IonTitle>
                    <IonNote>Welcome Martha</IonNote>
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