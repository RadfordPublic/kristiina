import React, {useState} from 'react';
import {
    IonCard,
    IonButton,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonLabel,
    IonRow,
    IonSearchbar,
} from "@ionic/react";
import {useHistory} from "react-router";

interface MarketPlaceProps {
    name: string;
}

const MarketPlaceContainer: React.FC<MarketPlaceProps> = () => {
    const history = useHistory();
    const [searchText, setSearchText] = useState('');
    return (
        <IonContent>
            <IonGrid>
                <IonRow>
                    <IonCol size={"12"} size-sm="12">
                        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated/>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/95663585_540325533576267_7623299936578174976_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@oliviabowen</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>📩 👑Ambassador for W7, Skin Republic, Batiste, Eleventh Hour Beauty
                                                    👗 In The
                                                    Style @thebowenhome @exemptsociety</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/58603067_608959932919285_4220525849083904000_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@piamuehlenbeck</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>➖ Founder and CEO of @slinkii ➖ Enquiries: ➖ Currently driving around
                                                    Australia
                                                    in my Tesla:</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s.yimg.com/ny/api/res/1.2/79yF4GQkOFYdSQZ4eBgqEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExOTguOA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/45a57320-e014-11ea-9a96-395aac96b517"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@marthaa__k</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>📩 👑MAFS superstar, loving living my dream with my hubby and taking
                                                    pretty
                                                    photos for all of you :)</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/117796277_2619084321641943_5969822127587634329_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@stephclairesmith</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>Co founder of @sodashades 😎@midnightco & @keepitcleaner 👈🏼WORKOUT
                                                    WITH ME
                                                    👇🏼💪🏼</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/95663585_540325533576267_7623299936578174976_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@oliviabowen</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>📩 👑Ambassador for W7, Skin Republic, Batiste, Eleventh Hour Beauty
                                                    👗 In The
                                                    Style @thebowenhome @exemptsociety</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/58603067_608959932919285_4220525849083904000_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@piamuehlenbeck</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>➖ Founder and CEO of @slinkii ➖ Enquiries: ➖ Currently driving around
                                                    Australia
                                                    in my Tesla:</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s.yimg.com/ny/api/res/1.2/79yF4GQkOFYdSQZ4eBgqEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExOTguOA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/45a57320-e014-11ea-9a96-395aac96b517"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@marthaa__k</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>📩 👑MAFS superstar, loving living my dream with my hubby and taking
                                                    pretty
                                                    photos for all of you :)</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/117796277_2619084321641943_5969822127587634329_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@stephclairesmith</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>Co founder of @sodashades 😎@midnightco & @keepitcleaner 👈🏼WORKOUT
                                                    WITH ME
                                                    👇🏼💪🏼</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/95663585_540325533576267_7623299936578174976_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@oliviabowen</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>📩 👑Ambassador for W7, Skin Republic, Batiste, Eleventh Hour Beauty
                                                    👗 In The
                                                    Style @thebowenhome @exemptsociety</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/58603067_608959932919285_4220525849083904000_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@piamuehlenbeck</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>➖ Founder and CEO of @slinkii ➖ Enquiries: ➖ Currently driving around
                                                    Australia
                                                    in my Tesla:</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s.yimg.com/ny/api/res/1.2/79yF4GQkOFYdSQZ4eBgqEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTExOTguOA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-08/45a57320-e014-11ea-9a96-395aac96b517"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@marthaa__k</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>📩 👑MAFS superstar, loving living my dream with my hubby and taking
                                                    pretty
                                                    photos for all of you :)</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                    <IonCol size={"12"} size-sm="4">
                        <IonCard>
                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol size={"12"}>
                                            <img alt={'profile'} style={{
                                                display: "block",
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                height: "150px",
                                                width: "150px",
                                            }}
                                                 src="https://s3-us-west-2.amazonaws.com/api.starngage.media.profile/117796277_2619084321641943_5969822127587634329_n.jpg"/>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                <h1>@stephclairesmith</h1>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>9.1m</h1>
                                                <h3>Followers</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>3.5%</h1>
                                                <h3>Engagement</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>4%</h1>
                                                <h3>Sponsored</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"3"}>
                                            <IonLabel>
                                                <h1>33</h1>
                                                <h3>Completed Jobs</h3>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonLabel>
                                                {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                                                <p>Co founder of @sodashades 😎@midnightco & @keepitcleaner 👈🏼WORKOUT
                                                    WITH ME
                                                    👇🏼💪🏼</p>
                                            </IonLabel>
                                        </IonCol>
                                        <IonCol size={"12"}>
                                            <IonButton
                                                expand="full"
                                                onClick={() => history.push("/page/Profile/tabs/tab1")}
                                            >
                                                Profile
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>

        </IonContent>
    );
};

export default MarketPlaceContainer;
