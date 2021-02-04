import React from 'react';
import {
    IonCard, IonCardContent,
    IonCardHeader, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonIcon, IonItem, IonLabel, IonList,
    IonRow,
} from '@ionic/react';
import AudienceChart from "../components/AudienceChart";
import {
    apertureSharp, cameraSharp, fastFoodSharp, hardwareChipSharp,
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

const Tab2: React.FC = () => {
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"}>
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"3"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                                borderRadius: "50%",
                                            }}
                                                 src="https://s.yimg.com/ny/api/res/1.2/79yF4GQkOFYdSQZ4eBgqEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExOTguOA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/45a57320-e014-11ea-9a96-395aac96b517"/>
                                        </IonCol>
                                        <IonCol size={"9"}>
                                            <IonLabel>
                                                <h1>Martha Kalifatidis</h1>
                                                <h2>@marthaa__k</h2>
                                                <br/>
                                                <p> 870 posts 430k followers 1,581 following</p>
                                            </IonLabel>
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
                                <IonCardTitle>Audience Growth</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <AudienceChart/>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"6"}>
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
                    <IonCol size={"4"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Age Distribution</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <AgeGroupDonutChart/>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Ethnicity</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <EthnicityChart/>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"4"}>
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
                    <IonCol size={"6"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Audience Brand affinity</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonIcon icon={logoAmazon}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Amazon 20%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={logoApple}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Apple inc 13%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={logoDiscord}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Discord 13%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={logoPlaystation}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Playstation
                                                11%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={logoTwitter}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Twitter 40%</h1>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"6"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Audience Interests</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonIcon icon={cameraSharp}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Camera &
                                                Photography 45.66%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={hardwareChipSharp}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Computers
                                                40.32%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={tvSharp}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Film 23.21%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={trailSignSharp}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Travel 20.24%</h1>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={fastFoodSharp}/>
                                        <IonLabel>
                                            <h1 style={{textAlign: "right"}}>&nbsp;&nbsp;&nbsp;&nbsp;Food 17.04%</h1>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size={"6"}>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>Key Statistics</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonList>
                                    <IonItem>
                                        <IonIcon icon={apertureSharp}/>
                                        <IonLabel>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp;45%</h1>
                                            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Engagement Rate</h2>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={apertureSharp}/>
                                        <IonLabel>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp;20k</h1>
                                            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Authentic engagement per post</h2>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={apertureSharp}/>
                                        <IonLabel>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp;Health</h1>
                                            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Influencer key sector</h2>
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem>
                                        <IonIcon icon={apertureSharp}/>
                                        <IonLabel>
                                            <h1>&nbsp;&nbsp;&nbsp;&nbsp;United States</h1>
                                            <h2>&nbsp;&nbsp;&nbsp;&nbsp;Influencer main audience base</h2>
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Tab2;
