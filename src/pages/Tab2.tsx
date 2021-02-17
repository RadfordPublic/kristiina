import React from 'react';
import {
    IonButtons,
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton,
    IonRow, IonToolbar,
} from '@ionic/react';
import AudienceChart from "../components/AudienceChart";
import {
    cameraSharp, fastFoodSharp, hardwareChipSharp,
    logoAmazon,
    logoApple,
    logoDiscord,
    logoPlaystation,
    logoTwitter, trailSignSharp, tvSharp
} from "ionicons/icons";
import FollowerPieChart from "../components/FollowerPieChart";
import AgeGroupDonutChart from "../components/AgeGroupDonutChart";
import EthnicityChart from "../components/EthnicityChart";
import GenderDonutChart from "../components/GenderDonutChart";
import AffinityNivo from "../components/AffinityNivo";
import InsightsNivo from "../components/InsightsNivo";

const Tab2: React.FC = () => {
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
                                                     src="https://i.imgur.com/dnfl8f1.jpg"/>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Affinity Category</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{
                                    width: '100%',
                                    height: '300px',
                                    margin: '30px 0'
                                }}>
                                    <AffinityNivo/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Influence Insights</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent style={{
                                    width: '100%',
                                    height: '300px',
                                    margin: '30px 0'
                                }}>
                                    <InsightsNivo/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>LookALike Accounts</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/N8JxJlU.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Audience Growth</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <AudienceChart/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Follower Analysis</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <FollowerPieChart/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Age Distribution</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <AgeGroupDonutChart/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Ethnicity</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <EthnicityChart/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Gender</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <GenderDonutChart/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Audience Brand affinity</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonList>
                                        <IonItem>
                                            <IonIcon icon={logoAmazon}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Amazon 20%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={logoApple}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Apple inc
                                                    13%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={logoDiscord}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Discord
                                                    13%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={logoPlaystation}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Playstation
                                                    11%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={logoTwitter}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Twitter
                                                    40%</h3>
                                            </IonLabel>
                                        </IonItem>
                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Audience Interests</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonList>
                                        <IonItem>
                                            <IonIcon icon={cameraSharp}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Camera &
                                                    Photography 45.66%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={hardwareChipSharp}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Computers
                                                    40.32%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={tvSharp}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Film
                                                    23.21%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={trailSignSharp}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Travel
                                                    20.24%</h3>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonIcon icon={fastFoodSharp}/>
                                            <IonLabel>
                                                <h3 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Food
                                                    17.04%</h3>
                                            </IonLabel>
                                        </IonItem>
                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Follower Report Summary</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/I4fGru8.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Funnel Report</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/gJZ3kCa.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab2;
