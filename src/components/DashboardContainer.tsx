import React from 'react';
import './DashboardContainer.css';
import {
    IonButton,
    IonCard, IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonItem, IonLabel, IonList,
    IonRow, IonThumbnail
} from "@ionic/react";

interface DashboardProps {
    name: string;
}

const DashboardContainer: React.FC<DashboardProps> = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Welcome</IonCardTitle>
                                <IonCardSubtitle>Sam Radford</IonCardSubtitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"6"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>jobs feed</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need male model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need male model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need male model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                    <IonItem>
                                        <IonThumbnail slot="start">
                                            <img alt={"model"}
                                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw=="/>
                                        </IonThumbnail>
                                        <IonLabel>
                                            <h2>Need male model, ecommerce shoots</h2>
                                            <p>$300 AUD</p>
                                        </IonLabel>
                                        <IonButton fill="outline" slot="end">View</IonButton>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"6"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>revenue history</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Message Box</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Active Job Tracking</IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonContent>
    );
};

export default DashboardContainer;
