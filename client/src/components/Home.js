import "../css/home.css"
import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";


export default class Home extends Component{
    render() {
        return (
            <Container>
                <h3 class="view">Sale</h3>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="Snow.png"
                        alt="Verde Mate Green Cactus (kaktusowa) 0,5kg"
                        />
                        <div>
                        <p className="p">Verde Mate Green Cactus</p>
                        <h3 className="h2">6,45 EUR</h3>
                        <h4 className="h3">18,42 EUR</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="red.png"
                        alt="Bombilla Gringo Arco Iris Tęczowa"
                        />
                        <div>
                        <p className="p">Bombilla Gringo Arco Iris</p>
                        <h3 className="h2">9,85 EUR</h3>
                        <h4 className="h3">15,38 EUR</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="sweterek.png"
                        alt="Yerbomos Guarani PARAGUAY"
                        />
                        <div>
                        <p className="p">Yerbomos Guarani PARAGUAY</p>
                        <h3 className="h2">7,45 EUR</h3>
                        <h4 className="h3">14,95 EUR</h4>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="balwan.png"
                        alt="Szydełkowy sweterek Clara na tykwie"
                        />
                        <div>
                        <p className="p">Sweterek Clara na tykwie</p>
                        <h3 className="h2">7,50 EUR</h3>
                        <h4 className="h3">8,90 EUR</h4>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <p>
                    <br></br>
                    <h4>Something about Yerba Mate</h4>
                    <h4>What is yerba mate?</h4>
                        Yerba mate is an aromatic infusion based on Paraguay holly leaves with a high 
                        caffeine content. Appreciated by the inhabitants of South America for centuries, 
                        it has recently become more and more popular in our country. How to start your 
                        adventure with yerba? What do we need to fully enjoy this healthy and natural 
                        coffee substitute? You will learn everything from the text!
                    
                    <h4>Yerba mate - a bit of history.</h4>
                        Yerba Mate grows up in the tropical borderland of Brazil, Argentina and Paraguay. 
                        Its properties were discovered by the Guarani Indians living in this area. 
                        An energizing and nutrient-rich infusion was prepared from the leaves. 
                        Consuming yerba mate was a ritual, and the plant was given extraordinary care. 
                        During the conquista, the areas inhabited by the Guaranas came under the management 
                        of the Jesuits. The monks formed the so-called reductions. These were quasi-states 
                        based on a traditional economy, managed according to the idea of ​​equality and solidarity. 
                        The monks, fascinated by the native brew, saw the properties of yerba mate as a potential 
                        source of profit. A number of studies and innovative experiments were carried out at that 
                        time. Finally, the technology for cultivating this demanding plant was developed and the 
                        first plantations were established. This enabled the production of large quantities of
                        raw material far exceeding local demand. So yerba began to be exported to other
                        provinces of the continent. Widespread access and high popularity came quickly.
                        Already in the 19th century, mate gained the status of the national drink of
                        Paraguayans and Argentines. Over time, the yerba pot became a popular motif
                        in art and literature. The then romanticized character of the gaucha, i.e.
                        a lonely shepherd from the endless Pampas, was depicted with the inseparable 
                        mater at his side. Over time, the yerba pot became a popular motif in art 
                        and literature. The then romanticized character of the gaucha, i.e. a lonely 
                        shepherd from the endless Pampas, was depicted with the inseparable mater at 
                        his side. Over time, the yerba pot became a popular motif in art and literature. 
                        The then romanticized character of the gaucha, i.e. a lonely shepherd from the 
                        endless Pampas, was depicted with the inseparable mater at his side.<br></br>
                        Yerba mate reached Europe in the 19th century, but for many decades it 
                        was a niche, hard-to-reach product. It was especially popular among 
                        Hispanic immigrants living in Spain. The popularization of online 
                        sales turned out to be a revolution. Thanks to this, the group of 
                        mateists from the Old Continent has been gradually expanding for several 
                        years. The phenomenon of yerba has not bypassed Poland either. According 
                        to statistics, we are at the forefront of yerba mate consumption in Europe.
                    
                    <h4>How does yerba mate work?</h4> 
                        Paraguay holly properties.Thanks to the high 
                        content of caffeine, infusions based on yerba mate have a stimulating effect. 
                        Depending on the species, the degree of saturation with the substance can be from 
                        0.5% to 2%. Caffeine is absorbed by the body via the stomach and small intestine, 
                        from where it goes directly to the tissues. In addition to energy stimulation, 
                        the infusion stimulates the muscles, accelerating metabolism and kidney function. 
                        That is why it is often recommended for slimming diets. In combination with proper 
                        nutrition and physical activity, it will significantly help fight obesity. 
                        What's more, it contains a number of vitamins and mineral salts. It also supports 
                        the immune system - mateists get sick less often. Unlike coffee, it provides 
                        magnesium, not flushes it out. Thanks to this, when drinking yerba mate, 
                        we will not feel the side effects known to coffee lovers. 
                    
                    <h4>Yerba mate or coffee? What's healthier?</h4>
                        The number of yerba mate lovers is growing every year. There are still others 
                        ready to abandon coffee in favor of stimulating infusions from South America. 
                        Why so much interest? The issue of health impact plays a major role here. 
                        Let's look at the details. The reason why we reach for both drinks is of course 
                        their stimulating properties. As we know, energetic stimulation is due to the 
                        presence of caffeine. In the case of brewed coffee, it is from about 380 to 650 mg. 
                        On the other hand, one cup of yerba mate has an average of 360 mg. The question 
                        arises: why is it better to choose an infusion of Paraguayan holly? Well, it's 
                        not just caffeine that should be considered. Looking at the full chemical 
                        composition of both drinks, we will see many differences. In a detailed comparison, 
                        yerba mate is much better. Every 100 milliliters is potassium, micro- and macroelements, 
                        lutein, phosphorus, niacin, 6 vitamins and a huge portion of antioxidants. 
                        Coffee beans do not contain most of these substances or they are present in much 
                        smaller amounts. Coffee drinkers certainly know the not-so-pleasant feeling of 
                        weakness that follows some time after drinking coffee. It results from the fact 
                        that coffee flushes out the magnesium accumulated in the body. With yerba mate it 
                        is different. This is because it does not flush out magnesium as much as it provides 
                        it! The feeling of arousal will not be sudden and intense, but it will last longer 
                        and do without an unpleasant "downhill". Coffee drinkers certainly know the 
                        not-so-pleasant feeling of weakness that follows some time after drinking coffee. 
                        It results from the fact that coffee flushes out the magnesium accumulated in the body. 
                        With yerba mate it is different. This is because it does not flush out magnesium 
                        as much as it provides it! The feeling of arousal will not be sudden and intense, 
                        but it will last longer and do without an unpleasant "downhill". Coffee drinkers 
                        certainly know the not-so-pleasant feeling of weakness that follows some time after 
                        drinking coffee. It results from the fact that coffee flushes out the magnesium 
                        accumulated in the body. With yerba mate it is different. This is because it does 
                        not flush out magnesium as much as it provides it! The feeling of arousal will not 
                        be sudden and intense, but it will last longer and do without an unpleasant "downhill".
                        
                    <h4>How is yerba mate made? Regional varieties of yerba mate.</h4>
                        Most often, yerba mate is made from dried and smoked leaves and stems of 
                        Paraguayan holly. Depending on the region, however, we can notice differences 
                        in processing affecting the taste of the infusion. Paraguayan yerba mate is made 
                        according to the method described above. It is characterized by a strongly bitter, 
                        "smoky" aroma and the presence of sticks and dust. Due to the high temperatures 
                        prevailing there, the drink is served mainly cold. Paraguayan brands will taste 
                        great in this form. Although yerba mate is produced in a similar way in Argentina, 
                        it is rather less bitter and contains less dust. Argentinians like to reach for 
                        despalada drought, i.e. one that contains only leaves. The infusion is most often 
                        eaten warm. A separate issue is yerba mate from Brazil and Uruguay. In the country 
                        of samba, the so-called chimarrao. Smoking and aging processes are omitted during 
                        production. After harvesting, the leaves are ground into a fine dust with a juicy 
                        green color. The infusion has a sweetish, slightly grassy aftertaste. Uruguayan 
                        yerba mate is the proverbial raisin, because the country does not have its own 
                        plantations! The raw material is imported from Brazil. However, it has a rather 
                        peculiar character, which distinguishes it from Brazilian products. It contains 
                        a lot of leaves and dust with no sticks. The taste is mild, although the sweet                             
                        notes of chimarrao give way to dry accents. There is also no juicy green, 
                        chlorophyll color. It is mostly olive. Uruguayan yerba mate is the proverbal 
                        raisin, because the country does not have its own plantations! The raw material 
                        is imported from Brazil. However, it has a rather peculiar character, which 
                        distinguishes it from Brazilian products. It contains a lot of leaves and dust 
                        with no sticks. The taste is mild, although the sweet notes of chimarrao give 
                        way to dry accents. There is also no juicy green, chlorophyll color. It is mostly 
                        olive. Uruguayan yerba mate is the proverbial raisin, because the country does not 
                        have its own plantations! The raw material is imported from Brazil. However, it 
                        has a rather peculiar character, which distinguishes it from Brazilian products. 
                        It contains a lot of leaves and dust with no sticks. The taste is mild, although 
                        the sweet notes of chimarrao give way to dry accents. There is also no juicy green, 
                        chlorophyll color. It is mostly olive.
                        
                    <h4>How to prepare yerba mate infusion?</h4>

                    <h4>What is the bombilla used for? Types of bombillas for yerba mate.</h4>
                        What is a bombilla? It is nothing more than a special filter tube. It is a must-have 
                        for every yerba mate fan, as it separates the grounds from the infusion. There are 
                        many types of bombillas. We select them depending on the material and type of dried 
                        yerba mate. Most often they are made of metal alloys. We can choose from, among others: 
                        aluminum, stainless steel and alpaca, also known as "new silver". They are equipped 
                        with spiral, spoon or punched filters. These may have one or more layers. The more 
                        there are, the more thoroughly we will filter our infusion.
                        <img 
                            src="bombillastypes.png"
                            width="700px"
                            height="200px"
                            alt="bombilla types"
                        />
                </p>
            </Container>    
        );
    }
};