import React, { useState } from 'react'

import Image from 'react-bootstrap/Image';

import SubscribeComponent from "./SubscribeComponent"
import logo_banner from "./logo_banner.png";
import { useNavigate } from 'react-router-dom';

import Logo from "./logo.png";
import AngleBG from "./erabu_ac_bg_01.png";
import EBookPreview from "./et_guide_angle.png";


import BannerHome from "./BannerHome";




function ACWatchedPot30() {

    let navigate = useNavigate();

    function onBannerClick() {
        navigate("/");
    }

    return (
        <div className="scroll-div">
            <div className="bg-main">
                <Image src={AngleBG} className="bg-angle" />
                <div className="ac-header-container">
                    <div className="ac-header-container-text">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>Trading Options <b>WASTES</b> your time and effort.</h1>
                        <br />
                        <h1>But you can make it work on your timetable.</h1>
                        <br />
                        <h1><b>Discover</b> the secret to trading in a <b>fraction of the time</b>.</h1>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <BannerHome />
                    <h1>Sign Up Now For Announcements</h1>
                    <h1>And Receive A <u>FREE</u></h1>
                    <h1 className="ebook-title">~ Erabu Trades Options Strategy Guide ~</h1>
                    <h1>Covered Call Edition</h1>
                    <div className="ebook-sub-btn">
                        <SubscribeComponent overrideText="<< Get My Free Guide" />
                    </div>
                    <div className="ac-text-centered">
                        <h4>We detest SPAM and will never share your information.</h4>
                        <h4>Your Erabu Trades Options Strategy Guide is 100% FREE.</h4>
                        <h4>No obligation to make any purchases.</h4>
                    </div>
                </div>
                <div className="ac-body">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <br />
                    <br />

                    <h2>The old saying <i>a watched pot never boils</i> is truer than ever.</h2>
                    <br />
                    <h2><b>TIME</b> is your most valuable asset.</h2>
                    <br />
                    <h2>Yet it is spent glued to a computer, watching and waiting.</h2>
                    <br />
                    <h2>You should not be trading away something so precious.</h2>
                    <br />
                    <h2>This asset belongs to you, your family, and your purpose.</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>Your Time does NOT belong to the whims of the market.</b></h1>
                    <br />
                    <br />
                    <h2>But you might be thinking: <i>so what?</i></h2>
                    <br />
                    <h2>Investing time and effort is required to make profit.</h2>
                    <br />
                    <h2>True!</h2>
                    <br />
                    <h2>You are 100% correct.</h2>
                    <br />
                    <h2>Trading options can be a tedious, time intensive process.</h2>
                    <br />
                    <h2>There are so many considerations:</h2>
                    <br />
                    <ul>
                        <li><h1>Finding potential options</h1></li>
                        <li><h1>Evaluating their profitability</h1></li>
                        <li><h1>Managing your current positions</h1></li>
                        <li><h1>Searching for profitable exits/rolls</h1></li>
                        <li><h1>Staring at a screen waiting for the numbers to align<br /> like the stars in the sky</h1></li>
                    </ul>
                    <br />
                    <br />
                    <h2>Somedays it seems like</h2>
                    <br /><br />
                    <h1 className="ac-text-centered"><b>Options trading requires just as much effort as day trading.</b></h1>
                    <br /><br />
                    <h2>And this does not even begin to touch the time management required to juggle your work, family, hobbies, and goals against trading.</h2>
                    <br />
                    <h2>Fitting trading into your busy schedule is near impossible.</h2>
                    <br />
                    <h2>Even if you do manage it, you are likely sacrificing one or more of those important life priorities.</h2>
                    <br />
                    <h2>And if you ask option trading gurus for advice, they all say the same things:</h2>
                    <br />
                    <ul>
                        <li><h2>Learn to make spreadsheets</h2></li>
                        <li><h2>Organize your data</h2></li>
                        <li><h2>Use formulas to parse the info</h2></li>
                        <li><h2>Automate the calculations</h2></li>
                    </ul>
                    <br />
                    <h2>You need a degree in analytics and computer science to make sense of it all.</h2>
                    <br />
                    <h2>To be clear, they are not wrong. This is all good advice.</h2>
                    <br />
                    <h2>But this advice misses the MOST IMPORTANT THING.</h2>
                    <br /><br />
                    <h1 className="ac-text-centered"><b>You do not have time to waste on this!</b></h1>
                    <br /><br />


                    <h2>Mastering option trading requires years of effort.</h2>
                    <br />
                    <h2>Knowing this, most people would just give up.</h2>
                    <br />
                    <h2>And they would be rational and justified in doing so.</h2>
                    <br />
                    <h2>Had I known this so many years ago, I might have given up too.</h2>
                    <br />
                    <h2>But I was young, driven, optimistic, and I had a degree in computer science.</h2>
                    <br /><br />
                    <h1 className="ac-text-centered"><b>Everything I needed was right in front of me, I just had to spend the time to put the pieces all together.</b></h1>
                    <br /><br />
                    <h2>I invested my time and made the trade for knowledge.</h2>
                    <br />
                    <h2>Years and years, I spent studying statistics, option trading, and making trades myself.</h2>
                    <br />
                    <h2>I followed this rabbit hole to the end and discovered several things I never would have expected.</h2>
                    <br />
                    <h2>Now I wish to share this knowledge with you.</h2>
                    <br />
                    <h2>Your time is precious. Trust me, you do not want to spend years figuring this out.</h2>
                    <br />



                    <h1 className="ac-text-centered"><b>There is no time to lose!</b></h1>
                    <br />
                    <h2>Trading options is no exception.</h2>
                    <br />
                    <h2>It steals your time away.</h2>
                    <br />
                    <h2>But it could be as simple as just a few minutes each day</h2>
                    <br />
                    <h2>I know for a fact that this is possible.</h2>
                    <br />
                    <h2>How?</h2>
                    <br />
                    <h2>Because I have been trading options this way for years.</h2>
                    <br />
                    <h2>I am serious about this.</h2>
                    <br />
                    <h1 className="ac-text-centered"><b>Trading Options can be that simple.</b></h1>
                    <br />
                    <h2>If you want to:</h2>
                    <br />
                    <ul>
                        <li><h2>Learn how to make consistently smart option trades</h2></li>
                        <li><h2>Discover profitable exits</h2></li>
                        <li><h2>Be a profitable options trader without working overtime</h2></li>
                    </ul>
                    <br />
                    <h2>Then pay close attention. It starts with knowing a priceless truth.</h2>
                    <br />
                    <h2>Have you heard of the <b>Pareto Principle</b>?</h2>
                    <br />
                    <h2>Understanding this concept will not only lead to massive optimizations to your trading, but can give you valuable insights into your own life and reality itself.</h2>
                    <br />
                    <h2>I mean it. This concept is POWERFUL.</h2>
                    <br />
                    <h2>The Pareto Principle states that for many outcomes, roughly</h2>
                    <br /><br />
                    <h1 className="ac-text-centered"><b>80% of consequences come from 20% of causes.</b></h1>
                    <br /><br />
                    <h2>This has also been called the 80/20 rule.</h2>
                    <br />
                    <h2>So what does this actually mean?</h2>
                    <br />
                    <h2>Let’s look at some real world examples:</h2>
                    <br />
                    <ul>
                        <li><h2>80% of shots scored in basketball are made by 20% of the players</h2></li>
                        <li><h2>The top 20% of popular songs are played 80% of the time</h2></li>
                        <li><h2>20% of people hold 80% of the wealth</h2></li>
                        <li><h2>80% of sales come from 20% of clients</h2></li>
                        <li><h2>You wear 20% of your clothes 80% of the time</h2></li>
                        <li><h2>80% of the population lives in 20% of the cities</h2></li>
                    </ul>
                    <br />
                    <h2>This is a brutal principle and a reminder of how the world actually works.</h2>
                    <br />
                    <h2>Not everything in life follows this rule, but you would be surprised how many things do.</h2>
                    <br />
                    <h2>If you apply it properly you can optimize important aspects of your life.</h2>
                    <br /><br />
                    <h1 className="ac-text-centered"><b>There isn’t a lack of time problem, there is a ‘time use’ problem.</b></h1>
                    <br /><br />
                    <h2>The most productive, valuable, and genius work is done in relatively little time.</h2>
                    <br />
                    <h2>What matters is where the time is being focused.</h2>
                    <br /><br />
                    <h1 className="ac-text-centered"><b>This is key to unlocking your potential with options trading.</b></h1>

                    <br /><br />
                    <h2>Let’s think how we can apply this concept to our trades.</h2>
                    <br />
                    <h2>Remember the rule of 80/20.</h2>
                    <br />
                    <h2>20% of your trades account for 80% of your profits.</h2>
                    <br />
                    <h2>The inverse is true as well.</h2>
                    <br />
                    <h2>80% of your trades only account for 20% of your profits.</h2>
                    <br />
                    <h2>You do not even need a calculator to know if this is true.</h2>
                    <br />
                    <h2>Just think about your profitable trades.</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>Most of your profitable trades are so-so. That’s the 80%.</b></h1>
                    <br />
                    <h1 className="ac-text-centered"><b>But every now and then you hit a home run. That’s the 20%.</b></h1>
                    <br />
                    <br />
                    <h2>Now we are getting to the golden nugget of wisdom that I discovered during my journey into options trading.</h2>
                    <br />
                    <h2>It started with an observation, and then a question.</h2>
                    <br />
                    <h2>I observed that 80% of the time spent trading options was spent on just finding and validating which options to trade.</h2>
                    <br />
                    <h2>Only 20% of the time is actually spent performing the trades and exiting.</h2>
                    <br />
                    <h2>In fact, it’s more like 90/10.</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>Almost all the time trading options is trying to find the entries and exits.</b></h1>
                    <br />
                    <br />
                    <h2>Then it hit me! What if I focused on streamlining that tedious process?</h2>
                    <br />
                    <h2>By targeting that specific component, I could make trading options break out of the cycle of the Pareto Principle.</h2>
                    <br />
                    <h2>I could free up to 80-90% of the time.</h2>
                    <br />
                    <h2>But how did I actually achieve this goal?</h2>
                    <br />
                    <h2>It sounds good in theory, but can it be done in practice?</h2>
                    <br />
                    <h2>At this point my head was spinning with ideas.</h2>
                    <br />
                    <h2>So, I sat down and went to work.</h2>
                    <br />
                    <h2>I relied on my extensive experience developing software & doing process optimization.</h2>
                    <br />
                    <h2>I chipped away at the problem, until I arrived at a solution.</h2>
                    <div className="ac-text-centered">
                        <BannerHome />
                    </div>
                    <h1 className="ac-text-centered"><b>Low Maintenance Covered Calls Management</b></h1>
                    <br />
                    <div className="ebook-sub-btn">
                        <SubscribeComponent overrideText="<< Get My Free Guide" />
                    </div>
                    <br />
                    <br />
                    <h2>Erabu Trades has isolated the most tedious and time intensive part of trading options:</h2>
                    <h2 className="ac-text-centered">Searching, Tracking, & Notifying</h2>
                    <br />
                    <h2>Then on top of that we automated everything and made it user friendly.</h2>
                    <br />
                    <h2>The heart and soul of Erabu Trades is the intelligent formulas combined with automation.</h2>
                    <br />
                    <h2>By applying your positions and targets</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>Erabu Trades smart formulas will take care of the 80% for you.</b></h1>
                    <br />
                    <br />
                    <ul>
                        <li><h2>Do you want to know when options exists that match your goal called/uncalled percentage in the next few months.</h2></li>
                        <h1><b>Erabu Trades does that.</b></h1>
                        <li><h2>Do you want to know when your stock/option position has an exit opportunity above or below a threshold?</h2></li>
                        <h1><b>Erabu Trades does that.</b></h1>
                        <li><h2>Do you want to be notified when your targets are reached, instead of checking in every hour or every day.</h2></li>
                        <h1><b>Erabu Trades does that too.</b></h1>
                    </ul>
                    <br />
                    <br />

                    <h2>Our motto is <b>Trade your options, NOT your time</b>.</h2>
                    <br />
                    <h2>We stand by this.</h2>
                    <br />
                    <h1 className="ac-text-centered"><b>This is what makes Erabu Trades so special.</b></h1>
                    <br />
                    <ul>
                        <li><h2>It is <b>NOT</b> a trade ledger.</h2></li>
                        <li><h2>It is <b>NOT</b> a journal.</h2></li>
                        <li><h2>It is <b>NOT</b> a trading platform.</h2></li>
                        <li><h2>It is <b>NOT</b> a graph.</h2></li>
                        <li><h2>It is <b>NOT</b> a simple notification system.</h2></li>
                    </ul>
                    <br />
                    <h2>Erabu Trades is your Low Maintenance Covered Calls Management service.</h2>
                    <br />
                    <h2>And it is built by hand from the ground up to understand options trading.</h2>
                    <br />
                    <h2>We mean it when we say low maintenance.</h2>
                    <br />
                    <h2> Unlike these other trading utility services</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>We want you to spend as little time as possible on the site.</b></h1>
                    <br />
                    <br />
                    <h2> <b>YES</b>, you heard that right.</h2>
                    <br />
                    <h2>It may sound counter intuitive.</h2>
                    <br />
                    <h2>But this is our ultimate mission, to truly give you back time while trading just as profitably.</h2>
                    <br />
                    <h2>And that means you should NOT need to spend hours on ErabuTrades.com. </h2>
                    <br />
                    <h2>Just a few minutes at most will do.</h2>
                    <br />
                    <h2>And our aim is for you to only visit the site when there is actionable information.</h2>
                    <br />
                    <h2>So much of trading is waiting.</h2>
                    <br />
                    <h2>If there is nothing to do right now, then we do NOT want to bother you.</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>Erabu Trades is built different.</b></h1>
                    <br />
                    <br />
                    <h2>None of these other services can honestly claim to help you save time.</h2>
                    <br />
                    <h2>Because deep down they know they cannot.</h2>
                    <br />
                    <h2>They hide this fact, by bombarding you with endless features that you will not even use.</h2>
                    <br />
                    <h2>They hope you won’t notice that learning to use their service is just as time intensive as trading itself.</h2>
                    <br />
                    <h2>They design their service to make you spend as much time as possible on their site, because they built their revenue system around that.</h2>
                    <br />
                    <h2>They want you ‘dependent’ on their tools.</h2>
                    <br />
                    <h2>We at Erabu Trades turned our backs on that design philosophy.</h2>
                    <br />
                    <h2>That is why you will not see something like Erabu Trades anywhere else.</h2>
                    <br />
                    <h2>These other sites cannot afford to put out a feature that saves you time, because they fear helping you spend less time trading.</h2>
                    <br />
                    <h2>Not even to mention most of the tools are so generic to serve a vague mass-market that they end up not being useful to anyone.</h2>
                    <br />
                    <h2>Erabu Trades is laser focused on covered-call options trading.</h2>
                    <br />
                    <h2>Using Erabu Trades is dead simple.</h2>
                    <br />
                    <ul>
                        <li><h2>There are <b>NO</b> overly complicated system.</h2></li>
                        <li><h2>There are <b>NO</b> time wasting features.</h2></li>
                        <li><h2>There are <b>NO</b> endless tutorials.</h2></li>
                        <li><h2>There are <b>NO</b> obstacles stopping you anymore.</h2></li>
                    </ul>
                    <br />


                    <h2>All Erabu Trades needs is your positions and your targets.</h2>
                    <br />
                    <h2>That is it!</h2>
                    <br />
                    <h2>Remember the <i>watched pot</i> analogy from the beginning?</h2>
                    <br />
                    <h2>Well, Erabu Trades is the kettle whistle.</h2>
                    <br />
                    <br />
                    <h1 className="ac-text-centered"><b>Make your trades, live your life.</b></h1>
                    <br />
                    <h1 className="ac-text-centered"><b>Erabu Trades will let you know when the water is ready.</b></h1>
                    <br />
                    <br />
                    <h2>But I am not done yet!</h2>
                    <br />
                    <h2>Erabu Trades is being built with one type of person in mind. YOU.</h2>
                    <br />
                    <h2>Erabu Trades wants YOU to get back as much time as possible.</h2>
                    <br />
                    <h2>Erabu Trades want YOU to be successful in your trades.</h2>
                    <br />
                    <h2>And as a token of our gratitude that you have visited us today, we’d like to offer you this free strategy guide.</h2>
                    <br />
                    <h2>This is the same covered calls strategy that I’ve followed successfully.</h2>
                    <br />
                    <h2>And today it is yours free, just enter your email in the box below and hit the button.</h2>
                    <br />
                    <div className="ac-text-centered">
                        <Image src={EBookPreview} width={256} />
                    </div>
                    <br />
                    <div className="ebook-sub-btn">
                        <SubscribeComponent overrideText="<< Get My Free Guide" />
                    </div>
                    <div className="ac-text-centered">
                        <h4>We detest SPAM and will never share your information.</h4>
                        <h4>Your Erabu Trades Options Strategy Guide is 100% FREE.</h4>
                        <h4>No obligation to make any purchases.</h4>
                    </div>
                    <br />
                    <h2>But if you are not satisfied with just having the guide.</h2>
                    <br />
                    <h1 className="ac-text-centered"><b>If you are ready to jump into Erabu Trades</b></h1>
                    <h1 className="ac-text-centered"><b>and massively optimize your trading.</b></h1>
                    <br />
                    <h2>Then we have exciting news!</h2>
                    <br />
                    <h2>We will be emailing the launch announcement soon.</h2>
                    <br />
                    <h2>The Erabu Trades website is currently under construction.</h2>
                    <br />
                    <h2>So keep on the lookout for more news.</h2>
                    <br />
                    <h2>‘Til then, stay diligent in your current trades, and remember:</h2>
                    <br />
                    <h2>Very soon you will have more free time than you know what to do with.</h2>
                    <br />
                    <h1 className="ac-text-centered"><b>Erabu Trades will be live soon.</b></h1>
                    <br />
                    <div className="ac-text-centered">
                        <BannerHome />
                    </div>
                    <div className="ebook-sub-btn">
                        <SubscribeComponent overrideText="<< Get My Free Guide" />
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                </div>
            </div >
        </div >
    )
}

export default ACWatchedPot30