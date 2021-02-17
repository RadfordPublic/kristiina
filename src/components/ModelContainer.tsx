import React from 'react';
import './DashboardContainer.css';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonLabel,
    IonRow
} from "@ionic/react";

interface ModelProps {
    name: string;
}

const ModelContainer: React.FC<ModelProps> = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"4"} size-sm="2">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Programs</IonCardTitle>
                                </IonCardHeader>
                                <IonLabel>
                                    <h1 style={{textAlign: "center"}}>6</h1>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"} size-sm="2">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Spend</IonCardTitle>
                                </IonCardHeader>
                                <IonLabel>
                                    <h1 style={{textAlign: "center"}}>$200,000</h1>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"} size-sm="2">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Influencers</IonCardTitle>
                                </IonCardHeader>
                                <IonLabel>
                                    <h1 style={{textAlign: "center"}}>49</h1>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"} size-sm="2">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Potential Reach</IonCardTitle>
                                </IonCardHeader>
                                <IonLabel>
                                    <h1 style={{textAlign: "center"}}>14,471,186</h1>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"} size-sm="2">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Stories</IonCardTitle>
                                </IonCardHeader>
                                <IonLabel>
                                    <h1 style={{textAlign: "center"}}>242</h1>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"} size-sm="2">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle  style={{textAlign: "center"}}>Social Posts</IonCardTitle>
                                </IonCardHeader>
                                <IonLabel>
                                    <h1 style={{textAlign: "center"}}>4,286</h1>
                                </IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"12"} size-sm="6">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle>Clicks</IonCardTitle>
                                </IonCardHeader>
                            {/*   LINE CHART HERE */}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="6">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle>Engagement</IonCardTitle>
                                </IonCardHeader>
                                {/*   Scatter plot CHART HERE */}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"12"} size-sm="6">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle>Social Impressions</IonCardTitle>
                                </IonCardHeader>
                                {/*   PIE CHART HERE */}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="6">
                        <IonCard>
                            <IonCardContent>
                                <IonCardHeader>
                                    <IonCardTitle>Story Impressions</IonCardTitle>
                                </IonCardHeader>
                                {/*   Calendar CHART HERE */}
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ModelContainer;
