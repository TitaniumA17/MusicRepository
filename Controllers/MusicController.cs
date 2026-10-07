using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using MusicRepository.Models;
using AspNetCoreGeneratedDocument;
namespace MusicRepository.Controllers
{
    public class MusicController : Controller
    {
        private static List<Music> listamusicas = new List<Music>
        {
            new Music { id = 1, titulo = "El libro de las sombras", artista = "Mago de Oz", album = "Hechizos, Pocimas y brujas", lanzamiento = new DateTime(2012, 9, 30), genero = Genero.Rock },
            new Music { id = 2, titulo = "Hasta que el cuerpo aguante", artista = "Mago de Oz", album = "Finisterra", lanzamiento = new DateTime(2000, 5, 19), genero = Genero.Rock },
            new Music { id = 3, titulo = "La leyenda de la Hada y el Mago", artista = "Rata Blanca", album = "Magos, espadas y rosas", lanzamiento = new DateTime(1990, 4, 24), genero = Genero.Rock }
        };
        public IActionResult Index()
        {
            return View(listamusicas);
        }
        // GET: /Productos/Crear
        public IActionResult Crear()
        {
            return View();
        }
        //POST : /Productos/Crear
        [HttpPost]
        public IActionResult Crear(Music musica)
        {
            if (ModelState.IsValid)
            {
                musica.id = listamusicas.Count > 0 ? listamusicas.Max(p => p.id) + 1 : 1;
                listamusicas.Add(musica);
                return RedirectToAction(nameof(Index));
            }
            return View(musica);
        }
    }
}
