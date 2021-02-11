import React from 'react';
import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
} from '@ionic/react';

const Tab4: React.FC = () => {
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
                    <IonCol size={"6"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Banking</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Tab4;
