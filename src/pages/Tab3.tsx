import React from 'react';
import {
    IonButtons,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonCol,
    IonContent,
    IonGrid, IonHeader, IonLabel, IonMenuButton,
    IonRow, IonToolbar,
} from '@ionic/react';
import WordChart from "../components/amcharts/WordChart";

const Tab3: React.FC = () => {
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
                        <IonCol size={"4"} size-sm="2">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>Posts</IonCardTitle>
                                        <br/>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>136</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="2">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>Estimated Impressions</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>245k</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="2">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>Total Estimated Reach</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>224k</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="2">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>CPM</IonCardTitle>
                                        <br/>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>$6.3</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="2">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>IG Likes</IonCardTitle>
                                        <br/>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>83k</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="2">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>IG Views</IonCardTitle>
                                        <br/>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>985k</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Engagement Rate</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/J6NY6Ok.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Content by Hashtags</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <WordChart />
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="4">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Audience Geography</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/KmHzt2F.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="8">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Age | Ethnicity | Gender</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/BcWQLoi.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Content by Type</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/wHzJNnd.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="6">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Content by Labels</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/NGdRyao.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab3;
