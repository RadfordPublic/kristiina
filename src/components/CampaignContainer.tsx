import React from 'react';
import './DashboardContainer.css';
import {
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonRow,
} from "@ionic/react";

interface CampaignProps {
    name: string;
}

const CampaignContainer: React.FC<CampaignProps> = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"} size-sm="12">
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Welcome</IonCardTitle>
                                <IonCardSubtitle>Demo</IonCardSubtitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardContent>
                                <img alt={'profile'} style={{
                                    display: "block",
                                    marginLeft: "0",
                                    marginRight: "0",
                                }}
                                     src="https://i.imgur.com/BUI8NLz.png"/>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default CampaignContainer;
