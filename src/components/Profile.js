import React from 'react';
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from '../constants';

class Profile extends React.Component {
    render() {
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            country,
            position,
            // height,
            // weight,
            playerId,
            pts, reb, ast, pie,
        } = this.props.playerInfo;
        return (
            <div className="profile">
                <div className="profile-entry player-name">{`${playerName}`}</div>
                <img
                    className="profile-pic"
                    src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
                    alt="Profile"
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>
                <img
                    className="team-logo"
                    src={`${TEAM_PIC_URL_PREFIX}/${teamAbbreviation}_logo.svg`}
                    alt=""
                />
                <div className="profile-entry">
                    <div className="profile-entry-left">Country</div>
                    <div className="profile-entry-right">{`${country}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Position</div>
                    <div className="profile-entry-right">{`${position}`}</div>
                </div>
                {/*<div className="profile-entry">*/}
                {/*    <div className="profile-entry-left">Height</div>*/}
                {/*    <div className="profile-entry-right">{`${height}`}</div>*/}
                {/*</div>*/}
                {/*<div className="profile-entry">*/}
                {/*    <div className="profile-entry-left">Weight</div>*/}
                {/*    <div className="profile-entry-right">{`${weight}`}</div>*/}
                {/*</div>*/}
                <div className="profile-entry">
                    <div className="profile-entry-left">Points</div>
                    <div className="profile-entry-right">{`${pts}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Rebound</div>
                    <div className="profile-entry-right">{`${reb}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Assist</div>
                    <div className="profile-entry-right">{`${ast}`}</div>
                </div>
                <div className="profile-PIE">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{`${pie}`}</div>
                </div>
            </div>
        );
    }
}

export default Profile;