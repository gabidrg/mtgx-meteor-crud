// All persistent data is stored as collections.
// Programs are implemented as Mongo collections using Collection2 package: https://github.com/aldeed/meteor-collection2
// This allows the usage of a schema for definition of objects and ensures validation against schema during create/update ops

Programs = new Meteor.Collection('programs');

ProgramSchema = new SimpleSchema({
  date: {
    type: Date,
    label: "Date",
    optional: false,
    autoform: {
      type: 'datetime-local'
    }
  },
  start_time: {
    type: String,
    label: "Start time",
    max: 5,
    optional: false
  },
  leadtext: {
    type: String,
    label: "Leadtext",
    max: 1000,
    optional: false
  },
  name: {
    type: String,
    label: "Name",
    max: 120,
    optional: false
  },
  bline: {
    type: String,
    label: "B-line",
    max: 120,
    optional: false
  },
  synopsis: {
    type: String,
    label: "Synopsis",
    max: 1000,
    optional: false
  },
  url: {
    type: String,
    label: "URL",
    max: 2000,
    optional: false,
    regEx: SimpleSchema.RegEx.Url
  },
  created: {
    type: Date,
    optional: true,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updated: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

Programs.attachSchema(ProgramSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
Programs.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});

// Dummy access control rules are defined here, we actually allow everybody to anything
Programs.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    return true;
  },
  remove: function (userId, doc) {
    return true;
  }
});

// Meteor methods related to collection
Meteor.methods({
  someMethod: function(arg1, arg2) {
    return "some return value";
  },
});
