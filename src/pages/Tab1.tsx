import React from "react";
import {
    IonButtons,
    IonCard, IonCardContent, IonCol,
    IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonToolbar,
} from "@ionic/react";

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
                        <IonCol size={"12"}>
                            <IonCard>
                                <IonCardContent>
                                    <img alt={"model"}
                                         src="https://i.imgur.com/wvW7JZ7.png"/>
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
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab1;
