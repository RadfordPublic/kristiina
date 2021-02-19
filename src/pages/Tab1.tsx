import React from "react";
import {
    IonButtons,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,
    IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonToolbar,
} from "@ionic/react";
import ClicksNivo from "../components/nivocharts/ClicksNivo";
import EngagementNivo from "../components/nivocharts/EngagementNivo";
import StoryNivo from "../components/nivocharts/StoryNivo";

const Tab1: React.FC = () => {

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <img alt={'profile'} style={{
                        display: "block",
                        marginLeft: "0",
                        marginRight: "0",
                        height: "100px",
                        width: "200px",
                    }}
                         src="https://i.imgur.com/o1cmaC7.jpg"/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid style={{marginBottom: '100px'}}>
                    <IonRow>
                        <IonCol size={"12"}>
                            <IonCard>
                                <IonCardContent>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size={"12"}>
                                                <img alt={'profile'} style={{
                                                    display: "block",
                                                    marginLeft: "0",
                                                    marginRight: "0",
                                                }}
                                                     src="https://i.imgur.com/ycn9Cud.jpg"/>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardContent>
                                    <img alt={"model"}
                                         src="https://i.imgur.com/awmVPGK.png"/>
                                    {/*<Iframe url="https://imgur.com/wvW7JZ7"*/}
                                    {/*        width="450px"*/}
                                    {/*        height="450px"*/}
                                    {/*        id="myId"*/}
                                    {/*        className="myClassname"*/}
                                    {/*        display="inline"*/}
                                    {/*        position="relative"/>*/}
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonRow>
                                <IonCol size={"12"} size-sm="12">
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>Clicks</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent style={{
                                            width: '100%',
                                            height: '300px',
                                            margin: '30px 0'
                                        }}>
                                            <ClicksNivo/>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size={"12"} size-sm="12">
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>Engagement</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent style={{
                                            width: '100%',
                                            height: '300px',
                                            margin: '30px 0'
                                        }}>
                                            <EngagementNivo/>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size={"12"} size-sm="12">
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>Social Impressions</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "0",
                                                marginRight: "0",
                                            }}
                                                 src="https://i.imgur.com/IbJlSle.png"/>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                                <IonCol size={"12"} size-sm="12">
                                    <IonCard>
                                        <IonCardHeader>
                                            <IonCardTitle>Story Impressions</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent style={{
                                            width: '100%',
                                            height: '300px',
                                            margin: '30px 0'
                                        }}>
                                            <StoryNivo/>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab1;
