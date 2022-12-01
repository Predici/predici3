function hapusMenu(url)
{
    swal.fire({
        title: "Are You Sure?",
        text: "Yakin ingin hapus menu",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!'
    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}
function hapusSubMenu(url)
{
    swal.fire({
        title: "Are You Sure?",
        text: "Yakin ingin hapus sub menu",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!'
    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}
function hapusRole(url)
{
    swal.fire({
        title: "Are You Sure?",
        text: "Yakin ingin hapus sub menu",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus!'
    }).then((result) => {
        if(result.value) {
            document.location.href = url;
        }
    })
}