import React, { useState } from 'react';
import axios from 'axios';


function getLanding()
{
  window.location.href = '/landing';
}




function CreateCharacterUI()
{

    var bp = require('./Path.js');
    var storage = require('../tokenStorage.js');
    const jwt = require("jsonwebtoken");

    
    var userName = '';
    var userId = '';

    var characterName = '';

    // class
    var class1 = '';
    var class1Lvl = '';
    var class2 = '';
    var class2Lvl = '';
    var class3 = '';
    var class3Lvl = '';
    var exp = '';

    // Character
    var alignment = '';
    var acrobatics = '';
    var animalHandling = ''; 
    var arcana = ''; 
    var athletics = ''; 
    var deception = ''; 
    var history = ''; 
    var insight = ''; 
    var intimidation = ''; 
    var investigation = ''; 
    var medicine = ''; 
    var nature = ''; 
    var perception = ''; 
    var performance = ''; 
    var persuasion = ''; 
    var religion = '';
    var sleightOfhand = ''; 
    var stealth = ''; 
    var survival = ''; 
    
    // abilities
    var str = ''; 
    var dex = ''; 
    var con = ''; 
    var int = ''; 
    var wis = '';
    var strSave = ''; 
    var dexSave = ''; 
    var conSave = ''; 
    var intSave = ''; 
    var wisSave = ''; 
    var chaSave = ''; 

    // Combat traits
    var armorClass = ''; 
    var initiative = ''; 
    var speed = ''; 
    var maxHP = '';
    var current = ''; 
    var hitDice = ''; 
    var attack1Name = ''; 
    var attack1Bonus  = '';
    var attack1Type = ''; 
    var attack2Name = '';
    var attack2Bonus = ''; 
    var attack2Type = ''; 
    var attack3Name = ''; 
    var attack3Bonus = ''; 
    var attack13ype = ''; 
    var ammoBased = ''; 
    var passivePerception = ''; 
    var profLanguages = ''; 
    
    // currency
    var cp = ''; // copper
    var sp = ''; // silver piece
    var ep = ''; // electrum piece
    var gp = ''; // gold
    var pp = ''; // platinum piece
    
    // physical appearance
    var backGround = '';
    var race = '';
    var equipment = ''; 
    var featTraits = ''; 
    var age = ''; 
    var height = ''; 
    var weight = '';
    var eyes = ''; 
    var skin = ''; 
    var hair = ''; 
    var picturePlaceholder = ''; 
    var alliedOrganizations = ''; 
    var allies = ''; 
    var backStory = ''; 
    var addfeatTraits = ''; 
    var treasure = '';

    // spells
    var spellClass = ''; 
    var spellAbility = ''; 
    var spellsaveDC = ''; 
    var spellBonus = '';
    var cantrips = ''; 
    var lvl1Spellslots = ''; 
    var lvl1Prepspells = ''; 
    var lvl1Expended = '';
    var lvl2Spellslots = ''; 
    var lvl2Prepspells = ''; 
    var lvl2Expended = ''; 
    var lvl3Spellslots = ''; 
    var lvl3Prepspells = ''; 
    var lvl3Expended = ''; 
    var lvl4Spellslots = ''; 
    var lvl4Prepspells = ''; 
    var lvl4Expended = ''; 
    var lvl5Spellslots = ''; 
    var lvl5Prepspells = ''; 
    var lvl5Expended = ''; 
    var lvl6Spellslots = ''; 
    var lvl6Prepspells = ''; 
    var lvl6Expended = ''; 
    var lvl7Spellslots = ''; 
    var lvl7Prepspells = ''; 
    var lvl7Expended = ''; 
    var lvl8Spellslots = ''; 
    var lvl8Prepspells = ''; 
    var lvl8Expended = ''; 
    var lvl9Spellslots = ''; 
    var lvl9Prepspells = ''; 
    var lvl9Expended = '';

    var search = '';

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [cardList,setCardList] = useState('');

    var _ud = localStorage.getItem('user_data');
    var ud = JSON.parse(_ud);
    var userId = ud.id;
    var firstName = ud.firstName;
    var lastName = ud.lastName;
    userName = firstName + " " + lastName;


    const addCharacter = async event => 
    {
	    event.preventDefault();

        var tok = storage.retrieveToken();
        var obj = 
            {
                userId:userId,
                userName:userName,        
                characterName:characterName.value,
                class1:class1.value,
                class1Lvl:class1Lvl.value,
                class2:class2.value,
                class2Lvl:class2Lvl.value,
                class3:class3.value,
                class3Lvl:class3Lvl.value,
                backGround:backGround.value,
                race:race.value,
                alignment:alignment.value,
                exp:exp.value,
                acrobatics:acrobatics.value,
                animalHandling:animalHandling.value, 
                arcana:arcana.value, 
                athletics:athletics.value, 
                deception:deception.value, 
                history:history.value, 
                insight:insight.value, 
                intimidation:intimidation.value, 
                investigation:investigation.value, 
                medicine:medicine.value, 
                nature:nature.value, 
                perception:perception.value, 
                performance:performance.value, 
                persuasion:persuasion.value, 
                religion: religion.value,
                sleightOfhand:sleightOfhand.value, 
                stealth:stealth.value, 
                survival:survival.value, 
                str:str.value, 
                dex:dex.value, 
                con:con.value, 
                int:int.value, 
                wis:wis.value,
                strSave:strSave.value, 
                dexSave:dexSave.value, 
                conSave:conSave.value, 
                intSave:intSave.value, 
                wisSave:wisSave.value, 
                chaSave:chaSave.value, 
                armorClass:armorClass.value, 
                initiative:initiative.value, 
                speed:speed.value, 
                maxHP:maxHP.value,
                currHP:current.value, 
                hitDice: hitDice.value, 
                attack1Name:attack1Name.value, 
                attack1Bonus:attack1Bonus .value,
                attack1Type:attack1Type.value, 
                attack2Name:attack2Name.value,
                attack2Bonus:attack2Bonus.value, 
                attack2Type:attack2Type.value, 
                attack3Name:attack3Name.value, 
                attack3Bonus:attack3Bonus.value, 
                attack13ype:attack13ype.value, 
                ammoBased:ammoBased.value, 
                passivePerception:passivePerception.value, 
                profLanguages:profLanguages.value, 
                cp:cp.value, 
                sp:sp.value, 
                ep:ep.value, 
                gp:gp.value, 
                pp:pp.value, 
                equipment:equipment.value, 
                featTraits:featTraits.value, 
                age:age.value, 
                height:height.value, 
                weight:weight.value,
                eyes:eyes.value, 
                skin:skin.value, 
                hair:hair.value, 
                picturePlaceholder:picturePlaceholder.value, 
                alliedOrganizations:alliedOrganizations.value, 
                allies:allies.value, 
                backStory:backStory.value, 
                addfeatTraits:addfeatTraits.value, 
                treasure:treasure.value, 
                spellClass:spellClass.value, 
                spellAbility:spellAbility.value, 
                spellsaveDC:spellsaveDC.value, 
                spellBonus:spellBonus.value,
                cantrips:cantrips.value, 
                lvl1Spellslots:lvl1Spellslots.value, 
                lvl1Prepspells:lvl1Prepspells.value, 
                lvl1Expended:lvl1Expended.value,
                lvl2Spellslots:lvl2Spellslots.value, 
                lvl2Prepspells:lvl2Prepspells.value, 
                lvl2Expended:lvl2Expended.value, 
                lvl3Spellslots:lvl3Spellslots.value, 
                lvl3Prepspells:lvl3Prepspells.value, 
                lvl3Expended:lvl3Expended.value, 
                lvl4Spellslots:lvl4Spellslots.value, 
                lvl4Prepspells:lvl4Prepspells.value, 
                lvl4Expended:lvl4Expended.value, 
                lvl5Spellslots:lvl5Spellslots.value, 
                lvl5Prepspells:lvl5Prepspells.value, 
                lvl5Expended:lvl5Expended.value, 
                lvl6Spellslots:lvl6Spellslots.value, 
                lvl6Prepspells:lvl6Prepspells.value, 
                lvl6Expended:lvl6Expended.value, 
                lvl7Spellslots:lvl7Spellslots.value, 
                lvl7Prepspells:lvl7Prepspells.value, 
                lvl7Expended:lvl7Expended.value, 
                lvl8Spellslots:lvl8Spellslots.value, 
                lvl8Prepspells:lvl8Prepspells.value, 
                lvl8Expended:lvl8Expended.value, 
                lvl9Spellslots:lvl9Spellslots.value, 
                lvl9Prepspells:lvl9Prepspells.value, 
                lvl9Expended:lvl9Expended.value,
                jwtToken:tok
            };
        var js = JSON.stringify(obj);

        var config = 
        {
            method: 'post',
            url: bp.buildPath('api/addDnD'),	
            headers: 
            {
                'Content-Type': 'application/json'
            },
            data: js
        };
    
        axios(config)
            .then(function (response) 
        {
            var res = response.data;
            var retTok = res.jwtToken;
    
            if( res.error.length > 0 )
            {
                setMessage( "API Error:" + res.error );
            }
            else
            {
                console.log("hi");
                storage.storeToken(retTok);
            }
        })
        .catch(function (error) 
        {
            console.log(error);
        });

	};

    return(
        <div id="landingPageDiv">
            <button type="button" id="landingButton" class="buttons" 
                onClick={getLanding}> Return to Landing </button><br />
            <br />
            <div>
                <p>Character Name</p>
                <input type="text" id="searchText" placeholder="Character Name" 
                    ref={(c) => characterName = c} />
                <br />
            </div>
            <div>
                <h2>Classes</h2>
                <table>
                    <tr>
                        <td>
                            <p>Class 1</p>
                            <input type="text" id="searchText" placeholder="Class 1"
                    ref={(c) => class1 = c} />
                        </td>
                        <td>
                            <p>Class 2</p>
                            <input type="text" id="searchText" placeholder="Class 2" 
                    ref={(c) => class2 = c} />
                        </td>
                        <td>
                            <p>Class 3</p>
                            <input type="text" id="searchText" placeholder="Class 3" 
                    ref={(c) => class3 = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Class 1 Level</p>
                            <input type="text" id="searchText" placeholder="Class 1 Level"
                        ref={(c) => class1Lvl = c} />  
                        </td>
                        <td>
                            <p>Class 2 Level</p>
                            <input type="text" id="searchText" placeholder="Class 2 Level"  
                        ref={(c) => class2Lvl = c} /> 
                        </td>
                        <td>
                            <p>Class 3 Level</p>
                            <input type="text" id="searchText" placeholder="Class 3 Level" 
                        ref={(c) => class3Lvl = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Exp</p>
                        </td>
                        <td>
                            <input type="text" id="searchText" placeholder="Exp" 
                        ref={(c) => exp = c} />
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h2>Character</h2>
                <table>
                    <tr>
                        <td>
                            <p>Alignment</p>
                            <input type="text" id="searchText" placeholder="Alignment" 
                        ref={(c) => alignment = c} />
                        </td>
                        <td>
                            <p>Acrobatics</p>
                            <input type="text" id="searchText" placeholder="Acrobatics" 
                        ref={(c) => acrobatics = c} />
                        </td>
                        <td>
                            <p>Animal Handling</p>
                            <input type="text" id="searchText" placeholder="Animal Handling" 
                        ref={(c) => animalHandling = c} />
                        </td>
                        <td>
                            <p>Arcana</p>
                            <input type="text" id="searchText" placeholder="Arcana" 
                        ref={(c) => arcana = c} />
                        </td>
                        <td>
                            <p>Athletics</p>
                            <input type="text" id="searchText" placeholder="Athletics" 
                        ref={(c) => athletics = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Deception</p>
                        <input type="text" id="searchText" placeholder="Deception" 
                    ref={(c) => deception = c} />
                        </td>
                        <td>
                        <p>History</p>
                        <input type="text" id="searchText" placeholder="History" 
                    ref={(c) => history = c} />
                        </td>
                        <td>
                        <p>Insight</p>
                        <input type="text" id="searchText" placeholder="Insight" 
                    ref={(c) => insight = c} />
                        </td>
                        <td>
                        <p>Intimidation</p>
                        <input type="text" id="searchText" placeholder="Intimidation" 
                    ref={(c) => intimidation = c} />
                        </td>
                        <td>
                        <p>Investigation</p>
                        <input type="text" id="searchText" placeholder="Investigation" 
                    ref={(c) => investigation = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Medicine</p>
                        <input type="text" id="searchText" placeholder="Medicine" 
                    ref={(c) => medicine = c} />
                        </td>
                        <td>
                        <p>Nature</p>
                        <input type="text" id="searchText" placeholder="Nature" 
                    ref={(c) => nature = c} />
                        </td>
                        <td>
                        <p>Perception</p>
                        <input type="text" id="searchText" placeholder="Perception" 
                    ref={(c) => perception = c} />
                        </td>
                        <td>
                        <p>Performance</p>
                        <input type="text" id="searchText" placeholder="Performance" 
                    ref={(c) => performance = c} />
                        </td>
                        <td>
                        <p>Persuasion</p>
                        <input type="text" id="searchText" placeholder="Persuasion" 
                    ref={(c) => persuasion = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Religion</p>
                        <input type="text" id="searchText" placeholder="Religion" 
                    ref={(c) => religion = c} />
                        </td>
                        <td>
                        <p>Sleight of Hand</p>
                        <input type="text" id="searchText" placeholder="Sleight of Hand" 
                    ref={(c) => sleightOfhand = c} />
                        </td>
                        <td>
                        <p>Stealth</p>
                        <input type="text" id="searchText" placeholder="Stealth" 
                    ref={(c) => stealth = c} />
                        </td>
                        <td>
                        <p>Survival</p>
                        <input type="text" id="searchText" placeholder="Survival" 
                    ref={(c) => survival = c} />
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h2>Abilities</h2>
                <table>
                <tr>
                        <td>
                        <p>Str</p>
                        <input type="text" id="searchText" placeholder="Str" 
                    ref={(c) => str = c} />
                        </td>
                        <td>
                        <p>Dex</p>
                        <input type="text" id="searchText" placeholder="Dex" 
                    ref={(c) => dex = c} />
                        </td>
                        <td>
                        <p>Con</p>
                        <input type="text" id="searchText" placeholder="Con" 
                    ref={(c) => con = c} />
                        </td>
                        <td>
                        <p>Int</p>
                        <input type="text" id="searchText" placeholder="Int" 
                    ref={(c) => int = c} />
                        </td>
                        <td>
                        <p>Wis</p>
                        <input type="text" id="searchText" placeholder="Wis" 
                    ref={(c) => wis = c} />
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <p>Str Save</p>
                        <input type="text" id="searchText" placeholder="Str Save" 
                    ref={(c) => strSave = c} />
                        </td>
                        <td>
                        <p>Dex Save</p>
                        <input type="text" id="searchText" placeholder="Dex Save" 
                    ref={(c) => dexSave = c} />
                        </td>
                        <td>
                        <p>Con Save</p>
                        <input type="text" id="searchText" placeholder="Con Save" 
                    ref={(c) => conSave = c} />
                        </td>
                        <td>
                        <p>Int Save</p>
                        <input type="text" id="searchText" placeholder="Int Save" 
                    ref={(c) => intSave = c} />
                        </td>
                        <td>
                        <p>Wis Save</p>
                        <input type="text" id="searchText" placeholder="Wis Save" 
                    ref={(c) => wisSave = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Cha Save</p>
                        </td>
                        <td>
                        <input type="text" id="searchText" placeholder="Cha Save" 
                    ref={(c) => chaSave = c} />
                        </td>
                    </tr>
                </table>

            </div>
            <div>
                <h2>Combat Traits</h2>
                <table>
                    <tr>
                        <td>
                            <p>Armor Class</p>
                            <input type="text" id="searchText" placeholder="Armor Class" 
                    ref={(c) => armorClass = c} /> 
                        </td>
                        <td>
                            <p>Initiative</p>
                            <input type="text" id="searchText" placeholder="Initiative" 
                                ref={(c) => initiative = c} />    
                        </td>
                        <td>
                        <p>Speed</p>
                <input type="text" id="searchText" placeholder="Speed" 
                    ref={(c) => speed = c} />  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Max HP</p>
                            <input type="text" id="searchText" placeholder="Max HP" 
                                ref={(c) => maxHP = c} />   
                        </td>
                        <td>
                            <p>Current</p>
                            <input type="text" id="searchText" placeholder="Current" 
                                ref={(c) => current = c} />   
                        </td>
                        <td>
                            <p>Hit Dice</p>
                            <input type="text" id="searchText" placeholder="Hit Dice" 
                                ref={(c) => hitDice = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Attack 1 Name</p>
                <input type="text" id="searchText" placeholder="Attack 1 Name" 
                    ref={(c) => attack1Name = c} />    
                        </td>
                        <td>
                        <p>Attack 1 Bonus</p>
                <input type="text" id="searchText" placeholder="Attack 1 Bonus" 
                    ref={(c) => attack1Bonus = c} />    
            
                        </td>
                        <td>
                        <p>Attack 1 Type</p>
                        <input type="text" id="searchText" placeholder="Attack 1 Type" 
                            ref={(c) => attack1Type = c} />    
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Attack 2 Name</p>
                <input type="text" id="searchText" placeholder="Attack 2 Name" 
                    ref={(c) => attack2Name = c} />    
                        </td>
                        <td>
                        <p>Attack 2 Bonus</p>
                <input type="text" id="searchText" placeholder="Attack 2 Bonus" 
                    ref={(c) => attack2Bonus = c} />    
                        </td>
                        <td>
                        <p>Attack 2 Type</p>
                <input type="text" id="searchText" placeholder="Attack 2 Type" 
                    ref={(c) => attack2Type = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Attack 3 Name</p>
                <input type="text" id="searchText" placeholder="Attack 3 Name" 
                    ref={(c) => attack3Name = c} />  
                        </td>
                        <td>
                        <p>Attack 3 Bonus</p>
                <input type="text" id="searchText" placeholder="Attack 3 Bonus" 
                    ref={(c) => attack3Bonus = c} />   
                        </td>
                        <td>
                        <p>Attack 3 Type</p>
                <input type="text" id="searchText" placeholder="Attack 3 Type" 
                    ref={(c) => attack13ype = c} />  
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Ammo Based</p>
                <input type="text" id="searchText" placeholder="Ammo Based" 
                    ref={(c) => ammoBased = c} />   
                        </td>
                        <td>
                        <p>Passive Perception</p>
                <input type="text" id="searchText" placeholder="Passive Perception" 
                    ref={(c) => passivePerception = c} />  
                        </td>
                        <td>
                        <p>Prof Languages</p>
                <input type="text" id="searchText" placeholder="Prof Languages" 
                    ref={(c) => profLanguages = c} />    
                        </td>
                    </tr>
                </table>

            </div>
            <div>
                <h2>Currency</h2>
                <table>
                    <tr>
                        <td>
                        <p>Copper Piece</p>
                <input type="text" id="searchText" placeholder="Copper Piece" 
                    ref={(c) => cp = c} />  
                        </td>
                        <td>
                        <p>Silver Piece</p>
                <input type="text" id="searchText" placeholder="Silver Piece" 
                    ref={(c) => sp = c} /> 
                        </td>
                        <td>
                        <p>Electrum Piece</p>
                <input type="text" id="searchText" placeholder="Electrum Piece"
                    ref={(c) => ep = c} />  
                        </td>
                        <td>
                        <p>Gold Piece</p>
                <input type="text" id="searchText" placeholder="Gold Piece" 
                    ref={(c) => gp = c} />
                        </td>
                        <td>
                        <p>Platinum Piece</p>
                <input type="text" id="searchText" placeholder="Platinum Piece" 
                    ref={(c) => pp = c} />  
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h2>Physical Appearance</h2>
                <table>
                    <tr>
                        <td>
                        <p>Background</p>
                <input type="text" id="searchText" placeholder="Background" 
                    ref={(c) => backGround = c} /> 
                        </td>
                        <td>
                        <p>Race</p>
                <input type="text" id="searchText" placeholder="Race" 
                    ref={(c) => race = c} /> 
                        </td>
                        <td>
                        <p>Equipment</p>
                <input type="text" id="searchText" placeholder="Equipment" 
                    ref={(c) => equipment = c} /> 
                        </td>
                        <td>
                        <p>Feat Traits</p>
                <input type="text" id="searchText" placeholder="Feat Traits" 
                    ref={(c) => featTraits = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Age</p>
                <input type="text" id="searchText" placeholder="Age" 
                    ref={(c) => age = c} />  
                        </td>
                        <td>
                        <p>Height</p>
                <input type="text" id="searchText" placeholder="Height" 
                    ref={(c) => height = c} /> 
                        </td>
                        <td>
                        <p>Weight</p>
                <input type="text" id="searchText" placeholder="Weight" 
                    ref={(c) => weight = c} />      
                        </td>
                        <td>
                        <p>Eyes</p>
                <input type="text" id="searchText" placeholder="Eyes" 
                    ref={(c) => eyes = c} />   
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Skin</p>
                <input type="text" id="searchText" placeholder="Skin" 
                    ref={(c) => skin = c} />
                        </td>
                        <td>
                        <p>Hair</p>
                <input type="text" id="searchText" placeholder="Hair" 
                    ref={(c) => hair = c} /> 
                        </td>
                        <td>
                        <p>Picture Placeholder</p>
                <input type="text" id="searchText" placeholder="Picture Placeholder" 
                    ref={(c) => picturePlaceholder = c} />  
                        </td>
                        <td>
                        <p>Allied Organizations</p>
                <input type="text" id="searchText" placeholder="Allied Organizations" 
                    ref={(c) => alliedOrganizations = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Allies</p>
                <input type="text" id="searchText" placeholder="Allies" 
                    ref={(c) => allies = c} />  
                        </td>
                        <td>
                        <p>Backstory</p>
                <input type="text" id="searchText" placeholder="Backstory" 
                    ref={(c) => backStory = c} />  
                        </td>
                        <td>
                        <p>Add Feat Traits</p>
                <input type="text" id="searchText" placeholder="Add Feat Traits" 
                    ref={(c) => addfeatTraits = c} /> 
                        </td>
                        <td>
                        <p>Treasure</p>
                <input type="text" id="searchText" placeholder="Treasure" 
                    ref={(c) => treasure = c} />  
                        </td>
                    </tr>
                </table>
            </div>
            <div>
                <h2>Spells</h2>
                <table>
                    <tr>
                        <td>
                        <p>Spell Class</p>
                <input type="text" id="searchText" placeholder="Spell Class" 
                    ref={(c) => spellClass = c} /> 
                        </td>
                        <td>
                        <p>Spell Ability</p>
                <input type="text" id="searchText" placeholder="Spell Ability" 
                    ref={(c) => spellAbility = c} /> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Spell Save DC</p>
                <input type="text" id="searchText" placeholder="Spell Save DC" 
                    ref={(c) => spellsaveDC = c} />  
                        </td>
                        <td>
                        <p>Spell Bonus</p>
                <input type="text" id="searchText" placeholder="Spell Bonus" 
                    ref={(c) => spellBonus = c} /> 
                        </td>
                        <td>
                        <p>Can Trips</p>
                <input type="text" id="searchText" placeholder="Can Trips" 
                    ref={(c) => cantrips = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 1 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 1 Spell Slot" 
                    ref={(c) => lvl1Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 1 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 1 Prep Spells" 
                    ref={(c) => lvl1Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 1 Expended</p>
                <input type="text" id="searchText" placeholder="Level 1 Expended" 
                    ref={(c) => lvl1Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 2 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 2 Spell Slot" 
                    ref={(c) => lvl2Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 2 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 2 Prep Spells" 
                    ref={(c) => lvl2Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 2 Expended</p>
                <input type="text" id="searchText" placeholder="Level 2 Expended" 
                    ref={(c) => lvl2Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 3 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 3 Spell Slot" 
                    ref={(c) => lvl3Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 3 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 3 Prep Spells" 
                    ref={(c) => lvl3Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 3 Expended</p>
                <input type="text" id="searchText" placeholder="Level 3 Expended" 
                    ref={(c) => lvl3Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 4 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 4 Spell Slot" 
                    ref={(c) => lvl4Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 4 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 4 Prep Spells" 
                    ref={(c) => lvl4Prepspells = c} /> 
                        </td>
                        <td>
                        <p>Level 4 Expended</p>
                <input type="text" id="searchText" placeholder="Level 4 Expended" 
                    ref={(c) => lvl4Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 5 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 5 Spell Slot" 
                    ref={(c) => lvl5Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 5 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 5 Prep Spells" 
                    ref={(c) => lvl5Prepspells = c} /> 
                        </td>
                        <td>
                        <p>Level 5 Expended</p>
                <input type="text" id="searchText" placeholder="Level 5 Expended" 
                    ref={(c) => lvl5Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 6 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 6 Spell Slot" 
                    ref={(c) => lvl6Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 6 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 6 Prep Spells" 
                    ref={(c) => lvl6Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 6 Expended</p>
                <input type="text" id="searchText" placeholder="Level 6 Expended" 
                    ref={(c) => lvl6Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 7 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 7 Spell Slot" 
                    ref={(c) => lvl7Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 7 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 7 Prep Spells" 
                    ref={(c) => lvl7Prepspells = c} />  
                        </td>
                        <td>
                        <p>Level 7 Expended</p>
                <input type="text" id="searchText" placeholder="Level 7 Expended" 
                    ref={(c) => lvl7Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 8 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 8 Spell Slot" 
                    ref={(c) => lvl8Spellslots = c} />
                        </td>
                        <td>
                        <p>Level 8 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 8 Prep Spells" 
                    ref={(c) => lvl8Prepspells = c} /> 
                        </td>
                        <td>
                        <p>Level 8 Expended</p>
                <input type="text" id="searchText" placeholder="Level 8 Expended" 
                    ref={(c) => lvl8Expended = c} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <p>Level 9 Spell Slot</p>
                <input type="text" id="searchText" placeholder="Level 9 Spell Slot" 
                    ref={(c) => lvl9Spellslots = c} /> 
                        </td>
                        <td>
                        <p>Level 9 Prep Spells</p>
                <input type="text" id="searchText" placeholder="Level 9 Prep Spells" 
                    ref={(c) => lvl9Prepspells = c} />
                        </td>
                        <td>
                        <p>Level 9 Expended</p>
                <input type="text" id="searchText" placeholder="Level 9 Expended" 
                    ref={(c) => lvl9Expended = c} />
                        </td>
                    </tr>
                </table>
            </div>
            <div>
            <button type="button" id="addCardButton" class="buttons" 
                onClick={addCharacter}> Add Character </button><br />
            </div>
        </div>
    );
}



export default CreateCharacterUI;