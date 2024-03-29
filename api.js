var token = require('./createJWT.js');

//need to address issues with JWT...when I have done commented it just means what it needs to do is being done

exports.setApp = function ( app, client )
{
    app.post('/api/deleteDND', async (req, res, next) =>
    {  
        // incoming: userName, passWord  
        // outgoing: error  
        var error = '';  
    
        const { userId, search, jwtToken } = req.body;
    
        var _search = search.trim();
    
        var _userId = userId.trim();
    
        var myQuery = {characterName: _search, userId: _userId};
        
        try
          {
            if( token.isExpired(jwtToken))
            {
              var r = {error:'The JWT is no longer valid', jwtToken: ''};
              res.status(200).json(r);
              return;
            }
          }
          catch(e)
          {
            console.log(e.message);
          }
        
          const db = client.db();
    
        const results = await db.collection('Characters').find({myQuery}).toArray();
        if(results == 0)
        {
          //do regular code
          var ret = { error: "Character does not exist!  ¯\(°_o)/¯" };  
          res.status(200).json(ret);
        }
        else
        {
            try {        
                const result = await db.collection('Characters').deleteOne(myQuery);
                error = "Character successfully  (•_•) ( •_•)>⌐■-■ (⌐■_■)  TERMINATED!  ";
                }  
              catch(e)
                {    
                    error = e.toString();  
                }
        
                var ret = { error: error,};
                res.status(200).json(ret);
    
        }
    
        var refreshedToken = null;
          try
          {
            refreshedToken = token.refresh(jwtToken);
          }
          catch(e)
          {
            console.log(e.message);
          }
        
          var ret = { results:_ret, error: error, jwtToken: refreshedToken };
          
          res.status(200).json(ret);
          
    });

    // Done
    app.post('/api/addDnD', async (req, res, next) =>
    {
      // incoming: userId, color
      // outgoing: error
        
      const { userId, userName,characterName, class1, class1Lvl, class2, class2Lvl, class3, class3Lvl, backGround, race, alignment, exp, acrobatics, animalHandling, arcana, athletics, deception, history, 
        insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfhand, stealth, survival, str, dex, con, int, wis,
          strSave, dexSave, conSave, intSave, wisSave, chaSave, armorClass, initiative, speed, maxHP, hitDice, attack1Name, attack1Bonus ,attack1Type, attack2Name,
         attack2Bonus, attack2Type, attack3Name, attack3Bonus, attack13ype, ammoBased, passivePerception, profLanguages, cp, sp, ep, gp, pp, equipment, featTraits, age, height, weight,
         eyes, skin, hair, picturePlaceholder, alliedOrganizations, allies, backStory, addfeatTraits, treasure, spellClass, spellAbility, spellsaveDC, spellBonus,
         cantrips, lvl1Spellslots, lvl1Prepspells, lvl1Expended,lvl2Spellslots, lvl2Prepspells, lvl2Expended, lvl3Spellslots, lvl3Prepspells, lvl3Expended, lvl4Spellslots, lvl4Prepspells, lvl4Expended, 
         lvl5Spellslots, lvl5Prepspells, lvl5Expended, lvl6Spellslots, lvl6Prepspells, lvl6Expended, lvl7Spellslots, lvl7Prepspells, lvl7Expended, lvl8Spellslots, lvl8Prepspells, lvl8Expended, 
         lvl9Spellslots, lvl9Prepspells, lvl9Expended, jwtToken } = req.body;
        const current =maxHP;
        
      try
      {
        if( token.isExpired(jwtToken))
        {
          var r = {error:'The JWT is no longer valid', jwtToken: ''};
          res.status(200).json(r);
          return;
        }
      }
      catch(e)
      {
        console.log(e.message);
      }
    
      const newCharacter = 
      {
        userName:userName,
        UserId:userId,        
        characterName:characterName,
        class1:class1,
        class1lvl:class1Lvl,
        class2:class2,
        class2lvl:class2Lvl,
        class3:class3,
        class3lvl:class3Lvl,
        backGround:backGround,
        race:race,
        alignment:alignment,
        exp:exp,
        acrobatics:acrobatics,
        animalHandling:animalHandling, 
        arcana:arcana, 
        athletics:athletics, 
        deception:deception, 
        history:history, 
        insight:insight, 
        intimidation:intimidation, 
        investigation:investigation, 
        medicine:medicine, 
        nature:nature, 
        perception:perception, 
        performance:performance, 
        persuasion:persuasion, 
        religion: religion,
        sleightOfhand:sleightOfhand, 
        stealth:stealth, 
        survival:survival, 
        str:str, 
        dex:dex, 
        con:con, 
        int:int, 
        wis:wis,
        strSave:strSave, 
        dexSave:dexSave, 
        conSave:conSave, 
        intSave:intSave, 
        wisSave:wisSave, 
        chaSave:chaSave, 
        armorClass:armorClass, 
        initiative:initiative, 
        speed:speed, 
        maxHP:maxHP,
        currHP:current, 
        hitDice: hitDice, 
        attack1Name:attack1Name, 
        attack1Bonus:attack1Bonus ,
        attack1Type:attack1Type, 
        attack2Name:attack2Name,
        attack2Bonus:attack2Bonus, 
        attack2Type:attack2Type, 
        attack3Name:attack3Name, 
        attack3Bonus:attack3Bonus, 
        attack13ype:attack13ype, 
        ammoBased:ammoBased, 
        passivePerception:passivePerception, 
        profLanguages:profLanguages, 
        cp:cp, 
        sp:sp, 
        ep:ep, 
        gp:gp, 
        pp:pp, 
        equipment:equipment, 
        featTraits:featTraits, 
        age:age, 
        height:height, 
        weight:weight,
        eyes:eyes, 
        skin:skin, 
        hair:hair, 
        picturePlaceholder:picturePlaceholder, 
        alliedOrganizations:alliedOrganizations, 
        allies:allies, 
        backStory:backStory, 
        addfeatTraits:addfeatTraits, 
        treasure:treasure, 
        spellClass:spellClass, 
        spellAbility:spellAbility, 
        spellsaveDC:spellsaveDC, 
        spellBonus:spellBonus,
        cantrips:cantrips, 
        lvl1Spellslots:lvl1Spellslots, 
        lvl1Prepspells:lvl1Prepspells, 
        lvl1Expended:lvl1Expended,
        lvl2Spellslots:lvl2Spellslots, 
        lvl2Prepspells:lvl2Prepspells, 
        lvl2Expended:lvl2Expended, 
        lvl3Spellslots:lvl3Spellslots, 
        lvl3Prepspells:lvl3Prepspells, 
        lvl3Expended:lvl3Expended, 
        lvl4Spellslots:lvl4Spellslots, 
        lvl4Prepspells:lvl4Prepspells, 
        lvl4Expended:lvl4Expended, 
        lvl5Spellslots:lvl5Spellslots, 
        lvl5Prepspells:lvl5Prepspells, 
        lvl5Expended:lvl5Expended, 
        lvl6Spellslots:lvl6Spellslots, 
        lvl6Prepspells:lvl6Prepspells, 
        lvl6Expended:lvl6Expended, 
        lvl7Spellslots:lvl7Spellslots, 
        lvl7Prepspells:lvl7Prepspells, 
        lvl7Expended:lvl7Expended, 
        lvl8Spellslots:lvl8Spellslots, 
        lvl8Prepspells:lvl8Prepspells, 
        lvl8Expended:lvl8Expended, 
        lvl9Spellslots:lvl9Spellslots, 
        lvl9Prepspells:lvl9Prepspells, 
        lvl9Expendedlvl9:lvl9Expended,
      };
      var error = '';
    
      try
      {
        const db = client.db();
        const result = db.collection('DnD').insertOne(newCharacter);
      }
      catch(e)
      {
        error = e.toString();
      }
    
      var refreshedToken = null;
      try
      {
        refreshedToken = token.refresh(jwtToken).accessToken;
      }
      catch(e)
      {
        console.log(e.message);
      }
    
      var ret = { error: error, jwtToken: refreshedToken };
      
      res.status(200).json(ret);
    });

    // Done
    app.post('/api/searchDnD', async (req, res, next) => 
    {
      // incoming: userId, search
      // outgoing: results[], error
    
      var error = '';
    
      const { userId, search, jwtToken } = req.body;

      try
      {
        if( token.isExpired(jwtToken))
        {
          var r = {error:'The JWT is no longer valid', jwtToken: ''};
          res.status(200).json(r);
          return;
        }
      }
      catch(e)
      {
        console.log(e.message);
      }
      
      var _search = search.trim();
      
      const db = client.db();
      const results = await db.collection('DnD').find({"characterName":{$regex:_search+'.*', $options:'r'}}).toArray();
      
      console.log(results.length);
      var _ret = [];
      for( var i=0; i<results.length; i++ )
      {
        _ret.push( results[i]);
      }
      
      var refreshedToken = null;
      try
      {
        refreshedToken = token.refresh(jwtToken).accessToken;
      }
      catch(e)
      {
        console.log(e.message);
      }
    
      var ret = { results:_ret, error: error, jwtToken: refreshedToken };
      
      res.status(200).json(ret);
    });

    
    app.post('/api/addUser', async (req, res, next) =>
    {  
        // incoming: userName, passWord  
        // outgoing: error  
        var error = '';  
        
        const { username, password, firstName, lastName, email, securityCode} = req.body;  
        const newUser = {Login:username,Password:password,FirstName:firstName, LastName:lastName, Email:email, SecurityCode:securityCode, verification:false };
        const db = client.db();

        const results = await db.collection('Users').find({Login:username}).toArray();
        // Add checker for email
        if(results == 0)
        {
          //do regular code
          
          try {        
            const result = await db.collection('Users').insertOne(newUser);
            error = "none";
            }  
          catch(e)
            {    
                error = e.toString();  
            }

            var ret = { error: error,};
            res.status(200).json(ret);
        }
        else
        {
          var ret = { error: "Duplicate username and/or password detected" };  
          res.status(200).json(ret);
        }
          
    });
          
    // Done
    app.post('/api/login', async (req, res, next) => 
    {
      // incoming: login, password
      // outgoing: id, firstName, lastName, error
    
      var error = '';
    
      const { login, password } = req.body;
    
      const db = client.db();
      const results = await db.collection('Users').find({Login:login,Password:password}).toArray();
    
      var id = -1;
      var fn = '';
      var ln = '';

      var ret;
    
      if( results.length > 0 )
      {
        id = results[0]._id;
        fn = results[0].FirstName;
        ln = results[0].LastName;

        try
        {
          ret = token.createToken( fn, ln, id );
        }
        catch(e)
        {
          ret = {error:e.message};
        }
      }
      else
      {
          ret = {error:"Login/Password incorrect"};
      }
    
      res.status(200).json(ret);
    });

    app.post('/api/updateDnD', async (req, res, next) => 
    {
        //Incoming: userID, objectID, change location, and the change 
        //outgoing the updated info

        const {userId, objectId, userName,characterName, class1, class1Lvl, class2, class2Lvl, class3, class3Lvl, backGround, race, alignment, exp, acrobatics, animalHandling, arcana, athletics, deception, history, 
            insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfhand, stealth, survival, str, dex, con, int, wis,
              strSave, dexSave, conSave, intSave, wisSave, chaSave, armorClass, initiative, speed, maxHP, hitDice, attack1Name, attack1Bonus ,attack1Type, attack2Name,
             attack2Bonus, attack2Type, attack3Name, attack3Bonus, attack13ype, ammoBased, passivePerception, profLanguages, cp, sp, ep, gp, pp, equipment, featTraits, age, height, weight,
             eyes, skin, hair, picturePlaceholder, alliedOrganizations, allies, backStory, addfeatTraits, treasure, spellClass, spellAbility, spellsaveDC, spellBonus,
             cantrips, lvl1Spellslots, lvl1Prepspells, lvl1Expended,lvl2Spellslots, lvl2Prepspells, lvl2Expended, lvl3Spellslots, lvl3Prepspells, lvl3Expended, lvl4Spellslots, lvl4Prepspells, lvl4Expended, 
             lvl5Spellslots, lvl5Prepspells, lvl5Expended, lvl6Spellslots, lvl6Prepspells, lvl6Expended, lvl7Spellslots, lvl7Prepspells, lvl7Expended, lvl8Spellslots, lvl8Prepspells, lvl8Expended, 
             lvl9Spellslots, lvl9Prepspells, lvl9Expended, jwtToken} = req.body;
        try
        {
        if( token.isExpired(jwtToken))
        {
            var r = {error:'The JWT is no longer valid', jwtToken: ''};
            res.status(200).json(r);
            return;
        }
        } 
        catch(e)
        {
        console.log(e.message);
        }
        var current = new Date();
        var characterID = {_id :objectId};
        const characterUpdate = 
        { set$:{ userName:userName,
          UserId:userId,        
          characterName:characterName,
          class1:class1,
          class1lvl:class1Lvl,
          class2:class2,
          class2lvl:class2Lvl,
          class3:class3,
          class3lvl:class3Lvl,
          backGround:backGround,
          race:race,
          alignment:alignment,
          exp:exp,
          acrobatics:acrobatics,
          animalHandling:animalHandling, 
          arcana:arcana, 
          athletics:athletics, 
          deception:deception, 
          history:history, 
          insight:insight, 
          intimidation:intimidation, 
          investigation:investigation, 
          medicine:medicine, 
          nature:nature, 
          perception:perception, 
          performance:performance, 
          persuasion:persuasion, 
          religion: religion,
          sleightOfhand:sleightOfhand, 
          stealth:stealth, 
          survival:survival, 
          str:str, 
          dex:dex, 
          con:con, 
          int:int, 
          wis:wis,
          strSave:strSave, 
          dexSave:dexSave, 
          conSave:conSave, 
          intSave:intSave, 
          wisSave:wisSave, 
          chaSave:chaSave, 
          armorClass:armorClass, 
          initiative:initiative, 
          speed:speed, 
          maxHP:maxHP,
          currHP:current, 
          hitDice: hitDice, 
          attack1Name:attack1Name, 
          attack1Bonus:attack1Bonus ,
          attack1Type:attack1Type, 
          attack2Name:attack2Name,
          attack2Bonus:attack2Bonus, 
          attack2Type:attack2Type, 
          attack3Name:attack3Name, 
          attack3Bonus:attack3Bonus, 
          attack13ype:attack13ype, 
          ammoBased:ammoBased, 
          passivePerception:passivePerception, 
          profLanguages:profLanguages, 
          cp:cp, 
          sp:sp, 
          ep:ep, 
          gp:gp, 
          pp:pp, 
          equipment:equipment, 
          featTraits:featTraits, 
          age:age, 
          height:height, 
          weight:weight,
          eyes:eyes, 
          skin:skin, 
          hair:hair, 
          picturePlaceholder:picturePlaceholder, 
          alliedOrganizations:alliedOrganizations, 
          allies:allies, 
          backStory:backStory, 
          addfeatTraits:addfeatTraits, 
          treasure:treasure, 
          spellClass:spellClass, 
          spellAbility:spellAbility, 
          spellsaveDC:spellsaveDC, 
          spellBonus:spellBonus,
          cantrips:cantrips, 
          lvl1Spellslots:lvl1Spellslots, 
          lvl1Prepspells:lvl1Prepspells, 
          lvl1Expended:lvl1Expended,
          lvl2Spellslots:lvl2Spellslots, 
          lvl2Prepspells:lvl2Prepspells, 
          lvl2Expended:lvl2Expended, 
          lvl3Spellslots:lvl3Spellslots, 
          lvl3Prepspells:lvl3Prepspells, 
          lvl3Expended:lvl3Expended, 
          lvl4Spellslots:lvl4Spellslots, 
          lvl4Prepspells:lvl4Prepspells, 
          lvl4Expended:lvl4Expended, 
          lvl5Spellslots:lvl5Spellslots, 
          lvl5Prepspells:lvl5Prepspells, 
          lvl5Expended:lvl5Expended, 
          lvl6Spellslots:lvl6Spellslots, 
          lvl6Prepspells:lvl6Prepspells, 
          lvl6Expended:lvl6Expended, 
          lvl7Spellslots:lvl7Spellslots, 
          lvl7Prepspells:lvl7Prepspells, 
          lvl7Expended:lvl7Expended, 
          lvl8Spellslots:lvl8Spellslots, 
          lvl8Prepspells:lvl8Prepspells, 
          lvl8Expended:lvl8Expended, 
          lvl9Spellslots:lvl9Spellslots, 
          lvl9Prepspells:lvl9Prepspells, 
          lvl9Expendedlvl9:lvl9Expended,
          dateLastused: current}
        };
        var error = '';
    
        try
        {
            const db = client.db();
            db.collection('DnD').updateOne(characterID, characterUpdate);
        }
        catch(e)
        {
          error = e.toString();
        }
      
        var refreshedToken = null;
        try
        {
          refreshedToken = token.refresh(jwtToken);
          console.log(refreshedToken);
        }
        catch(e)
        {
          console.log(e.message);
        }
      
        var ret = { error: error, jwtToken: refreshedToken };
        
        res.status(200).json(ret);   
    });
    
}