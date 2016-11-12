# Pouch Serializer Demo

This project is a demonstration of the requirement for a PouchDB serializer
to make the ember-data hasMany relationship work.

## Branches

* example-no-serialier
A parent/child setup using ember-date belongsTo/hasMany. Objects are saved
and displayed in the templates, but not persisted to PouchDB.
* example-with-serializer
Addition of 'serializers/application.js' containing:
```
import { Serializer } from 'ember-pouch';
export default Serializer.extend();
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd pouchtest`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
