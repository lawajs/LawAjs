@searchWords
Feature: User can search an item and sort result by date and refine the search by functionality

  Scenario: User navigate to the home page
    Given I navigate to the "home_page" page
    And I click on the cookies Acceptance Popup

  @searchWords-01
  Scenario Outline: A user is able to see the "Global|English" site
    When I am on the Global English site
    Then I should see the "globalEnglish" as "<global_english>"
    Examples:
      | global_english |
      | Global English |
  @searchWords-02
  Scenario Outline: A user is able to successfully search for the word "test" using the search box
    When I entered "<search_word>" in "seachEntryField"
    And I click on "searchIcon"
    Then I should see the "searchTestResult" as "<search_result>"
    Examples:
      | search_word | search_result    |
      | test        | results for test |
  @searchWords-03
  Scenario Outline: A user is able to sort the search result by date
    When I entered "<search_word>" in "seachEntryField"
    And I click on "searchIcon"
    And I could see "searchTestResult" as "<search_result>"
    And I click on "<sort_by_date>"
    Then I should see the "<date_caption_text>" as "<date_sorting_result>"
    Examples:
      | search_word | search_result    | sort_by_date                | date_caption_text              | date_sorting_result   |
      | test        | results for test | last31DaysToYearAgoCheckbox | last31DaysToYearAgoCaptionText | 31 days to a year ago |
      | test        | results for test | overYearAgoCheckbox         | overYearAgoCaptionText         | Over a year ago       |
      | test        | results for test | last30DaysDateCheckbox      | last30DaysCaptionText          | Last 30 Days          |
  @searchWords-04
  Scenario Outline: A user is able to sort the search result by over a year ago
    When I entered "<search_word>" in "seachEntryField"
    And I click on "searchIcon"
    And I could see "searchTestResult" as "<search_result>"
    When I click on "transportationCheckbox"
    Then I should see the "sortedByTransportationCaptionText" as "<transportation_sorting_result>"
    Examples:
      | search_word | search_result    | transportation_sorting_result |
      | test        | results for test | Transportation                |






























