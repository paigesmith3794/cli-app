// grabbing the search type arg
var search = process.argv[2];

// joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join("");

// by default, if no search type is provided, search for a tv show
if (!search) {
    search = "show";
}

// by default, if no search term is provided, then search for "Andy Griffith"
if (!term) {
    search = "Andy Griffth";
}

// print whether searching for a show or actor, print the term
if (search === "show") {
    console.log("searching for a show");
}

if (search === "actor") {
    console.log("searching for actor");
}