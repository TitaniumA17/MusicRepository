using System.ComponentModel.DataAnnotations;

namespace MusicRepository.Models
{
    public class Music
    {
        public int id { get; set; }
        //Cada variable asignada cuenta con su codigo de error personalizado.//
        [Required(ErrorMessage = "El título es obligatorio")]
        [Display(Name = "Título")]
        public string titulo { get; set; } = null!;


        [Required(ErrorMessage = "El artista es obligatorio")]
        [Display(Name = "Artista")]
        public string artista { get; set; } = null!;


        [Required(ErrorMessage = "El álbum es obligatorio")]
        [Display(Name = "Álbum")]
        public string album { get; set; } = null!;


        [Required(ErrorMessage = "La fecha de lanzamiento es obligatoria")]
        [DataType(DataType.Date)]
        [Display(Name = "Fecha de lanzamiento")]
        public DateTime lanzamiento { get; set; }


        [Required(ErrorMessage = "El género es obligatorio")]
        [Display(Name = "Género")]
        public required Genero genero { get; set; }
    }

    public enum Genero
    {
        Pop,
        Rock,
        Jazz,
        HipHop,
        Electronica,
        Clasica
    }
}
