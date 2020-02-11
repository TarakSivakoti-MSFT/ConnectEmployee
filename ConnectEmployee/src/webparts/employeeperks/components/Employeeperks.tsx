import * as React from "react";
import styles from "./Employeeperks.module.scss";
import { IEmployeeperksProps } from "./IEmployeeperksProps";
import cx from "classnames";
import * as $ from "jquery";
require("bootstrap");

export default class Employeeperks extends React.Component<
  IEmployeeperksProps,
  {}
> {
  public render(): React.ReactElement<IEmployeeperksProps> {
    return (
      <div className={styles.employeeperks}>
        <img
          src="https://m365x520260.sharepoint.com/sites/ConnectEmployee/Shared%20Documents/sys_pos_clr_rgb.png"
          className={styles.logo}
        />
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className={cx("nav-item", styles.navwd)}  onClick={() =>this._changeActive( "pills-home-tab")}
              >
            <a
              className={cx("nav-link active", styles.brrad,styles.active)}
              id="pills-home-tab"
              data-toggle="pill"
              href="#Employee-Discounts"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Employee Discounts
            </a>
          </li>
          <li className={cx("nav-item", styles.navwd)} onClick={() =>this._changeActive( "Community-perks")}>
            <a
              className={cx("nav-link", styles.brrad)} 
              id="Community-perks" 
              data-toggle="pill"
              href="#Community-Perks"
              role="tab"
              aria-controls="Community-perks"
              aria-selected="false"
            >
              Community Perks
            </a>
          </li>
          <li className={cx("nav-item", styles.navwd)} onClick={() =>this._changeActive( "Travel-discounts")}>
            <a
              className={cx("nav-link", styles.brrad)}
              id="Travel-discounts"
              data-toggle="pill"
              href="#Travel-Discounts"
              role="tab"
              aria-controls="Travel-discounts"
              aria-selected="false"
            >
              Travel Discounts
            </a>
          </li>
          <li className={cx("nav-item", styles.navwd)} onClick={() =>this._changeActive( "child-benefits-tab")}>
            <a
              className={cx("nav-link", styles.brrad)}
              id="child-benefits-tab"
              data-toggle="pill"
              href="#child-benefits"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Child Care Discounts
            </a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="Employee-Discounts"
            role="tabpanel"
            aria-labelledby="Employeed-discounts"
          >
            <h1>Employee Discounts</h1>
            <p>
              The terms perks and benefits are sometimes used interchangeably,
              but for our purposes, benefits are generally a form of noncash
              compensation that cover basic needs. If not offered by the
              employer, employees would likely have to fund them on their own.
            </p>
            <ol>
              <li>
                <h6>Health insurance.</h6> After salary, this staple benefit is
                of the utmost importance to many job candidates and typically
                includes medical coverage for employees and their families. In
                our survey, this benefit came in at No. 1, with 81% of employers
                offering it to their staff.
              </li>
              <li>
                <h6>Paid time off.</h6> Whether it’s for vacation, illness or
                bereavement, personal time off (PTO) is highly valued by
                employees and a great way to combat burnout. Two weeks is
                standard for new hires, but three or more weeks of PTO can be
                hard for many candidates to pass up.
              </li>
              <li>
                <h6>Dental insurance.</h6> What’s most important isn’t always
                most exciting, as evidenced by dental insurance being the third
                most common benefit offered by employers in our survey.
                Seventy-one percent of the employers surveyed offer it, no doubt
                putting a smile on their employees’ faces.
              </li>
              <li>
                <h6>Retirement savings plans.</h6> A tax-advantaged 401(k) plan
                can be an excellent way to motivate employees to save for
                retirement. Offering to match contributions up to a certain
                amount is a big plus in the eyes of workers and can encourage
                them to stick with your firm.
              </li>
              <li>
                <h6>Vision insurance.</h6> Another practical matter rounds out
                the top five benefits offerings in our survey, at 63%. Vision
                insurance is especially important to employees who use some type
                of corrective lenses, and for workers with spouses or children
                who need an annual eye exam.
              </li>
            </ol>
          </div>
          <div
            className="tab-pane fade"
            id="Community-Perks"
            role="tabpanel"
            aria-labelledby="Community-perks"
          >
            <h1>Community Perks</h1>
            <p>
              Perks — as in perquisites or corporate perks — are nice-to-have
              additions to an employee’s salary and benefits package. We define
              perks as above-and-beyond offerings that may sway an employee to
              value one employer over another. Think of them as icing on the
              cake.
            </p>
            <ol>
              <li>
                <h6>Flexible schedule and telecommuting.</h6> More and more
                companies allow employees to choose their own schedule, within
                reason. This typically means a compressed workweek (e.g., four
                10-hour days) or flextime, where employees can choose to work,
                say, 10 a.m. to 7 p.m. rather than an 8-5 schedule. The ability
                to telecommute — and avoid sitting in traffic — one or two days
                a week is also big with workers. In our survey, 50% of employers
                said they offer at least one of these options.
              </li>
              <li>
                <h6>Paid parental leave.</h6> Employees want to know they can
                still earn a wage and pursue career goals while caring for a
                newborn or newly adopted child. Companies that offer paid time
                off for new parents will likely gain points with top performers
                who may plan to become a parent — again or for the first time —
                in the future.
              </li>
              <li>
                <h6>Employee discounts.</h6> We’re not talking 5% off at the
                local coffee chain (though that’s not bad, in addition). But
                employees tend to love getting company-exclusive discounts on
                big-ticket purchases, from cars and homes to smartphones and
                home security systems.
              </li>
              <li>
                <h6>Free food (and good coffee).</h6> Some companies go all out,
                offering every meal, snack and treat for free. You don’t
                necessarily need to go that far, but catered lunches once a week
                and quality coffee freely available in every break room can
                certainly help keep morale (and caffeine levels) high.
              </li>
              <li>
                <h6>PTO for volunteering.</h6> Also known as VTO (volunteer time
                off), this perk gives employees inclined to donate their time to
                help others the opportunity to do so without dipping into their
                PTO. As an added bonus for businesses, this offering reflects
                highly on your corporate culture, which can help you retain and
                recruit employees and job seekers who want to work with
                companies whose values align with their own.
              </li>
            </ol>
          </div>
          <div
            className="tab-pane fade"
            id="Travel-Discounts"
            role="tabpanel"
            aria-labelledby="Travel-discounts"
          >
            <h1>Travel Discounts</h1>
            <ol>
              <li>
                <h6>REI.</h6> REI believes that “a life outdoors is a life
                well-lived.” So it’s no surprise that when it comes to time away
                from work, they prefer it to be spent in nature far, far from
                florescent lights. The nation’s largest consumer co-op and
                outdoor retailer offers “Yay Days” to its staff — two extra paid
                days off purely to get some fresh air in your lungs and put some
                distance between you and your desk. The company’s deep discount
                on gear and apparel also comes in handy to outfit employees for
                their activities. Plus, staffers can also apply for an REI
                Challenge Grant to cover some costs associated with a
                bucket-list outdoor adventure (say, a mountain bike race).
              </li>
              <li>
                <h6>Airbnb.</h6> From castles to condos, Airbnb has a variety of
                vacation rentals that have encouraged travelers to make
                themselves at home anywhere in the world. And thanks to an
                extravagant travel stipend, the company also supports its
                employees in doing the same. All full-time staff at the website
                receive a massive $2,000 yearly travel stipend (doled out as
                $500 every quarter) to book a trip. Naturally, the one
                stipulation is that travelers must stay in an Airbnb when they
                go so that they can get familiar with one of the four million
                listings on the site.
              </li>
              <li>
                <h6>G Adventures.</h6> Tour company G Adventures knows their
                employees have the potential to be their biggest brand
                ambassadors. That’s why the business offers an incredible perk
                allowing staffers to sample their small group tours, from
                trekking in Cambodia to cycling in Tuscany. Full-time employees
                are welcome to book one tour every 10 months, and G Adventures
                covers up to $3,000 CAD of tour expenses, effectively making
                these trips low or no cost. Accommodations, ground
                transportation, and several meals are typically included in the
                price. As if that wasn’t sweet enough, there’s a stipend for
                flights covering up to $750 CAD as well.
              </li>
            </ol>
          </div>
          <div
            className="tab-pane fade"
            id="child-benefits"
            role="tabpanel"
            aria-labelledby="child-benefits-tab"
          >
            <h1>Child Care Discounts</h1>
            <ol>
              <li>
                <h6>
                  DO offer a fair daycare staff childcare discount​​​​​​​.
                </h6>{" "}
                This all depends on your business model and your own decisions
                as a provider. A fair discount could range from 30% to 40% for
                teaching staff and higher for higher-ranking staff like regional
                directors or assistant directors. It could also be balanced with
                paid vacation time (as in less or no tuition discount in return
                for more paid vacation). Another limit you may want to have is
                the number of kids a staff member can have enrolled, say two.
                Having your staff’s kids in the daycare is great, but you don’t
                want all of your clients to be your employees (at a discounted
                price). Offering a discount will increase staff loyalty and
                dependability. It’s a sure thing your staff will show up for a
                shift when it’s not only where they work, but where their kid is
                enrolled, too. Staff discount can also increase as years are put
                in. So in addition to the base discount, it could increase by 5%
                for each additional year of employment up to 5 years or a
                maximum discount. This may sound expensive but it’s a small
                price to pay for keeping quality staff in your daycare.
              </li>
              <li>
                <h6>
                  DON’T bend the rules for individual employee’s needs​​​​​​​.
                </h6>
                Maybe one of your staff just had to move and is really tight on
                money. Maybe another just ran into a financial problem and needs
                a hand up with finding cheaper care for their kid for a few
                months. As their employer, of course you sympathize. That said,
                you shouldn’t bend the rules and offer huge daycare staff
                childcare discounts to one employee that you wouldn’t offer to
                others. Even if you agree to keep it between you, news like this
                tends to get out. Be consistent. If you offer a deal to one
                employee, offer it to everyone. Compassion and empathy, yes.
                Rule-bending that could put your business model underwater, no.
              </li>
              <li>
                <h6>
                  DO differentiate between full and part-time staff​​​​​​​.
                </h6>
                In other words, you can offer a much smaller discount to
                part-time staff. It’s still a good idea to offer something, as
                this builds loyalty and incentivizes staff to enroll their
                youngster at your daycare center. But if you run quite a large
                daycare center, you may employ many part-time staff. You can’t
                afford to give them all major discounts or enroll two kids each.
                You need to put the business first. So, offer moderate
                discounts, but keep your wits about you.
              </li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

   public _changeActive(currentitem){
     $('.nav-link').removeClass(styles.active);
     $("#"+currentitem).addClass(styles.active)
   }
}
