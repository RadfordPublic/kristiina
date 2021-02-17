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
import EngagementNivo from "./nivocharts/EngagementNivo";
import ClicksNivo from "./nivocharts/ClicksNivo";
import StoryNivo from "./nivocharts/StoryNivo";

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
                                    <IonCardTitle style={{textAlign: "center"}}>Programs</IonCardTitle>
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
                                    <IonCardTitle style={{textAlign: "center"}}>Spend</IonCardTitle>
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
                                    <IonCardTitle style={{textAlign: "center"}}>Influencers</IonCardTitle>
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
                                    <IonCardTitle style={{textAlign: "center"}}>Potential Reach</IonCardTitle>
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
                                    <IonCardTitle style={{textAlign: "center"}}>Stories</IonCardTitle>
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
                                    <IonCardTitle style={{textAlign: "center"}}>Social Posts</IonCardTitle>
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
                    <IonCol size={"12"} size-sm="6">
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
                </IonRow>
                <IonRow>
                    <IonCol size={"12"} size-sm="6">
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
                    <IonCol size={"12"} size-sm="6">
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
            </IonGrid>
        </IonContent>
    );
};

export default ModelContainer;
