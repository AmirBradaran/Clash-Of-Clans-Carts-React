import React from 'react'

export default function Slider() {
  return (
<div class="slide-container">

<div class="wrapper">
    <div class="arrow-wrapper">
        <div class="round">
            <div id="cta">
                <span class="arrow prev"></span>
            </div>
        </div>
    </div>
    <div class="clash-card barbarian">
        <div class="clash-card__image clash-card__image--barbarian">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png" alt="barbarian" />
        </div>
        <div class="clash-card__level clash-card__level--barbarian">Level 4</div>
        <div class="clash-card__unit-name">The Barbarian</div>
        <div class="clash-card__unit-description">
            The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for
            destruction. He has Killer yellow horseshoe mustache.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
            <div class="one-third">
                <div class="stat">20<sup>S</sup></div>
                <div class="stat-value">Training</div>
            </div>

            <div class="one-third">
                <div class="stat">16</div>
                <div class="stat-value">Speed</div>
            </div>

            <div class="one-third no-border">
                <div class="stat">150</div>
                <div class="stat-value">Cost</div>
            </div>

        </div>

    </div> 
    <div class="arrow-wrapper">
        <div class="round">
            <div id="cta">
                <span class="arrow next"></span>
            </div>
        </div>
    </div>

</div> 



<div class="wrapper">
    <div class="clash-card archer">
        <div class="clash-card__image clash-card__image--archer">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/archer.png" alt="archer" />
        </div>
        <div class="clash-card__level clash-card__level--archer">Level 5</div>
        <div class="clash-card__unit-name">The Archer</div>
        <div class="clash-card__unit-description">
            The Archer is a female warrior with sharp eyes. She wears a short, light green dress, a hooded cape,
            a leather belt and an attached small pouch.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--archer clearfix">
            <div class="one-third">
                <div class="stat">25<sup>S</sup></div>
                <div class="stat-value">Training</div>
            </div>

            <div class="one-third">
                <div class="stat">24</div>
                <div class="stat-value">Speed</div>
            </div>

            <div class="one-third no-border">
                <div class="stat">300</div>
                <div class="stat-value">Cost</div>
            </div>

        </div>

    </div> 
</div> 

<div class="wrapper">
    <div class="clash-card giant">
        <div class="clash-card__image clash-card__image--giant">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant.png" alt="giant" />
        </div>
        <div class="clash-card__level clash-card__level--giant">Level 5</div>
        <div class="clash-card__unit-name">The Giant</div>
        <div class="clash-card__unit-description">
            Slow, steady and powerful, Giants are massive warriors that soak up huge amounts of damage. Show
            them a turret or cannon and you'll see their fury unleashed!
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--giant clearfix">
            <div class="one-third">
                <div class="stat">2<sup>M</sup></div>
                <div class="stat-value">Training</div>
            </div>

            <div class="one-third">
                <div class="stat">12</div>
                <div class="stat-value">Speed</div>
            </div>

            <div class="one-third no-border">
                <div class="stat">2250</div>
                <div class="stat-value">Cost</div>
            </div>

        </div>

    </div> 
</div> 

<div class="wrapper">
    <div class="clash-card goblin">
        <div class="clash-card__image clash-card__image--goblin">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/goblin.png" alt="goblin" />
        </div>
        <div class="clash-card__level clash-card__level--goblin">Level 5</div>
        <div class="clash-card__unit-name">The Goblin</div>
        <div class="clash-card__unit-description">
            These pesky little creatures only have eyes for one thing: LOOT! They are faster than a Spring Trap,
            and their hunger for resources is limitless.
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--goblin clearfix">
            <div class="one-third">
                <div class="stat">30<sup>S</sup></div>
                <div class="stat-value">Training</div>
            </div>

            <div class="one-third">
                <div class="stat">32</div>
                <div class="stat-value">Speed</div>
            </div>

            <div class="one-third no-border">
                <div class="stat">100</div>
                <div class="stat-value">Cost</div>
            </div>

        </div>

    </div>
</div> 

<div class="wrapper">
    <div class="clash-card wizard">
        <div class="clash-card__image clash-card__image--wizard">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard.png" alt="wizard" />
        </div>
        <div class="clash-card__level clash-card__level--wizard">Level 6</div>
        <div class="clash-card__unit-name">The Wizard</div>
        <div class="clash-card__unit-description">
            The Wizard is a terrifying presence on the battlefield. Pair him up with some of his fellows and
            cast concentrated blasts of destruction on anything, land or sky!
        </div>

        <div class="clash-card__unit-stats clash-card__unit-stats--wizard clearfix">
            <div class="one-third">
                <div class="stat">5<sup>M</sup></div>
                <div class="stat-value">Training</div>
            </div>

            <div class="one-third">
                <div class="stat">16</div>
                <div class="stat-value">Speed</div>
            </div>

            <div class="one-third no-border">
                <div class="stat">4000</div>
                <div class="stat-value">Cost</div>
            </div>

        </div>

    </div> 
</div> 

</div>
  )
}