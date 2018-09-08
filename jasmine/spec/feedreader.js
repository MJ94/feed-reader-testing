/* feedreader.js
 *
 * Author: Michael Jackson
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is the first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This second test loops through each feed
        * in the allFeeds object and ensures it has a URL defined,
        * and that the URL is not empty. */
        it('url defined', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(typeof feed.url).toBe('string');
                expect(feed.url).not.toBe(0);
            }
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined,
         * and that the name is not empty.
         */
        it('name defined', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toBe('string');
                expect(feed.name).not.toBe(0);
            }
        });
    });


/* This is the second test suite.
 * This suite is all about the menu and its visibility.
 */
    describe('The menu', function () {
        /* Test to ensure the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function () {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* Test to ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('should toggle visibility when clicked', function () {
            const body = document.querySelector('body');
            const menuIcon = document.querySelector(".menu-icon-link");

            menuIcon.click();
            expect(body.classList.contains("menu-hidden")).toBe(false); // menu is open

            menuIcon.click();
            expect(body.classList.contains("menu-hidden")).toBe(true); // menu is closed
        });
    });

/* This is the third test suite.
 * This suite is all about the feed and its entries.
 */
    describe('Initial Entries', function () {
        
    })

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
