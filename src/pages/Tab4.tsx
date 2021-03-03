import React from 'react';
import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonRow,
    IonToolbar,
} from '@ionic/react';
import {
    addSharp,
    logoApple,
    logoBitcoin, logoDiscord, logoDropbox,
    logoEuro,
    logoGithub, logoLinkedin, logoSnapchat,
    logoUsd,
    logoYen,
} from "ionicons/icons";

const Tab4: React.FC = () => {
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
                        <IonCol size={"4"} size-sm="4">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>Completed Jobs</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>172</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="4">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>In Progress</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>3</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="4">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "center"}}>Booked Jobs</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>23</h1>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"3"} size-sm="3">
                            <IonCard>
                                <IonCardContent>
                                    <IonLabel>
                                        <h1 style={{textAlign: "center"}}>Account Balance</h1>
                                        <h2 style={{textAlign: "center"}}>$17,521.00</h2>
                                    </IonLabel>
                                    <IonList>
                                        <IonItem>
                                            <IonLabel>
                                                <h2><IonIcon icon={logoUsd}/>&nbsp;&nbsp;&nbsp;&nbsp;USD $12,533.44</h2>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>
                                                <h2><IonIcon icon={logoEuro}/>&nbsp;&nbsp;&nbsp;&nbsp;EUR $1,243.44</h2>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>
                                                <h2><IonIcon icon={logoBitcoin}/>&nbsp;&nbsp;&nbsp;&nbsp;BTC 0.00231
                                                </h2>
                                            </IonLabel>
                                        </IonItem>
                                        <IonItem>
                                            <IonLabel>
                                                <h2><IonIcon icon={logoYen}/>&nbsp;&nbsp;&nbsp;&nbsp;YEN $4,022.02</h2>
                                            </IonLabel>
                                        </IonItem>

                                        <IonItem>
                                            <IonLabel>
                                                <h2><IonIcon icon={addSharp}/>&nbsp;&nbsp;&nbsp;&nbsp;Add Currency</h2>
                                            </IonLabel>
                                        </IonItem>
                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"9"} size-sm="9">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "left"}}>Payment Methods</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <img alt={'bruh'} style={{
                                            display: "block",
                                            marginLeft: "0",
                                            marginRight: "0",
                                        }}
                                             src="https://i.imgur.com/fYyYnyP.png"/>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"8"} size-sm="8">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "left"}}>Payments</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <img alt={'pay'} style={{
                                            display: "block",
                                            marginLeft: "0",
                                            marginRight: "0",
                                        }}
                                             src="https://i.imgur.com/ZhsJqFO.png"/>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"4"} size-sm="4">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "left"}}>Credit Score</IonCardTitle>
                                    </IonCardHeader>
                                    <IonLabel>
                                        <img alt={'pay'} style={{
                                            display: "block",
                                            marginLeft: "0",
                                            marginRight: "0",
                                        }}
                                             src="https://i.imgur.com/ueM63bR.png"/>
                                    </IonLabel>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="12">
                            <IonCard>
                                <IonCardContent>
                                    <IonCardHeader>
                                        <IonCardTitle style={{textAlign: "left"}}>Upcoming Payments</IonCardTitle>
                                    </IonCardHeader>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol size={"4"} size-sm="2">
                                                <IonCard>
                                                    <IonCardContent>
                                                        <IonCardHeader style={{textAlign: "center"}}>
                                                            <IonIcon size={"large"} icon={logoGithub}/>
                                                        </IonCardHeader>
                                                        <IonLabel>
                                                            <h1 style={{textAlign: "center"}}>Github</h1>
                                                            <h2 style={{textAlign: "center"}}>213.02 USD</h2>
                                                            <h4 style={{textAlign: "center"}}>Due 14 Feb 2021</h4>
                                                        </IonLabel>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size={"4"} size-sm="2">
                                                <IonCard>
                                                    <IonCardContent>
                                                        <IonCardHeader style={{textAlign: "center"}}>
                                                            <IonIcon size={"large"} icon={logoApple}/>
                                                        </IonCardHeader>
                                                        <IonLabel>
                                                            <h1 style={{textAlign: "center"}}>Apple</h1>
                                                            <h2 style={{textAlign: "center"}}>613.02 USD</h2>
                                                            <h4 style={{textAlign: "center"}}>Due 19 Feb 2021</h4>
                                                        </IonLabel>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size={"4"} size-sm="2">
                                                <IonCard>
                                                    <IonCardContent>
                                                        <IonCardHeader style={{textAlign: "center"}}>
                                                            <IonIcon size={"large"} icon={logoDiscord}/>
                                                        </IonCardHeader>
                                                        <IonLabel>
                                                            <h1 style={{textAlign: "center"}}>Discord</h1>
                                                            <h2 style={{textAlign: "center"}}>1613.02 USD</h2>
                                                            <h4 style={{textAlign: "center"}}>Due 22 Feb 2021</h4>
                                                        </IonLabel>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size={"4"} size-sm="2">
                                                <IonCard>
                                                    <IonCardContent>
                                                        <IonCardHeader style={{textAlign: "center"}}>
                                                            <IonIcon size={"large"} icon={logoDropbox}/>
                                                        </IonCardHeader>
                                                        <IonLabel>
                                                            <h1 style={{textAlign: "center"}}>Dropbox</h1>
                                                            <h2 style={{textAlign: "center"}}>86.00 USD</h2>
                                                            <h4 style={{textAlign: "center"}}>Due 9 Mar 2021</h4>
                                                        </IonLabel>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size={"4"} size-sm="2">
                                                <IonCard>
                                                    <IonCardContent>
                                                        <IonCardHeader style={{textAlign: "center"}}>
                                                            <IonIcon size={"large"} icon={logoSnapchat}/>
                                                        </IonCardHeader>
                                                        <IonLabel>
                                                            <h1 style={{textAlign: "center"}}>Snapchat</h1>
                                                            <h2 style={{textAlign: "center"}}>4,286.00 YEN</h2>
                                                            <h4 style={{textAlign: "center"}}>Due 12 Mar 2021</h4>
                                                        </IonLabel>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                            <IonCol size={"4"} size-sm="2">
                                                <IonCard>
                                                    <IonCardContent>
                                                        <IonCardHeader style={{textAlign: "center"}}>
                                                            <IonIcon size={"large"} icon={logoLinkedin}/>
                                                        </IonCardHeader>
                                                        <IonLabel>
                                                            <h1 style={{textAlign: "center"}}>LinkedIn</h1>
                                                            <h2 style={{textAlign: "center"}}>686.00 EUR</h2>
                                                            <h4 style={{textAlign: "center"}}>Due 13 Mar 2021</h4>
                                                        </IonLabel>
                                                    </IonCardContent>
                                                </IonCard>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size={"12"} size-sm="3">
                            <IonCard>
                                <IonCardHeader>
                                    <IonCardTitle>Get Paid Early</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/hkFfCf4.png"/>
                                </IonCardContent>
                            </IonCard>
                            <IonCard>
                                <IonCardContent style={{marginBottom: 65}}>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/kzlr18N.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                        <IonCol size={"12"} size-sm="9">
                            <IonCard>
                                <IonCardContent style={{marginBottom: 20}}>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/qLYU6BU.png"/>
                                </IonCardContent>
                            </IonCard>
                            <IonCard>
                                <IonCardContent>
                                    <img alt={'profile'} style={{
                                        display: "block",
                                        marginLeft: "0",
                                        marginRight: "0",
                                    }}
                                         src="https://i.imgur.com/DNBYra7.png"/>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab4;
