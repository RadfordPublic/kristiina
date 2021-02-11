import React from "react";
import {
    IonCard, IonCardContent, IonCol,
    IonContent, IonGrid, IonRow,
} from "@ionic/react";

const Tab1: React.FC = () => {

    return (
        <IonContent>
            <IonGrid>
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
    );
};

export default Tab1;
